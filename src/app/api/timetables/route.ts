import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const timetables = await prisma.timetable.findMany({
      include: {
        department: true,
        _count: { select: { entries: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(timetables);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch timetables' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, departmentId } = await request.json();
    
    if (!title || !departmentId) {
      return NextResponse.json({ error: 'Title and departmentId are required' }, { status: 400 });
    }

    const timetable = await prisma.timetable.create({
      data: { title, departmentId }
    });
    
    return NextResponse.json(timetable, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create timetable' }, { status: 500 });
  }
}
