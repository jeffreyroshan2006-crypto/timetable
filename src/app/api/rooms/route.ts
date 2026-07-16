import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const rooms = await prisma.room.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(rooms);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch rooms' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, code, capacity, type } = await request.json();
    
    if (!name || !code || !capacity || !type) {
      return NextResponse.json({ error: 'All fields (name, code, capacity, type) are required' }, { status: 400 });
    }

    const room = await prisma.room.create({
      data: { 
        name, 
        code, 
        capacity: parseInt(capacity), 
        type 
      }
    });
    
    return NextResponse.json(room, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Room code already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create room' }, { status: 500 });
  }
}
