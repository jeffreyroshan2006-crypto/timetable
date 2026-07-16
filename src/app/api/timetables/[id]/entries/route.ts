import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { dayOfWeek, period, subjectId, facultyId, roomId } = await request.json();
    const { id } = await context.params;
    const timetableId = id;
    
    // Conflict Validation Rules (Rule of Singularity)
    // 1. Same faculty cannot be in two places at the same time
    const facultyClash = await prisma.timetableEntry.findFirst({
      where: { dayOfWeek, period, facultyId, timetable: { isPublished: true } } // Simple cross-timetable logic
    });
    if (facultyClash) return NextResponse.json({ error: 'Faculty Clash: Teacher is already booked for this period.' }, { status: 409 });

    // 2. Same room cannot be double-booked
    const roomClash = await prisma.timetableEntry.findFirst({
      where: { dayOfWeek, period, roomId }
    });
    if (roomClash) return NextResponse.json({ error: 'Room Clash: Room is already occupied during this period.' }, { status: 409 });

    // Insert Entry
    const entry = await prisma.timetableEntry.create({
      data: { timetableId, dayOfWeek, period, subjectId, facultyId, roomId },
      include: { subject: true, faculty: true, room: true }
    });
    
    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add entry' }, { status: 500 });
  }
}

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const entries = await prisma.timetableEntry.findMany({
      where: { timetableId: id },
      include: { subject: true, faculty: true, room: true }
    });
    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}
