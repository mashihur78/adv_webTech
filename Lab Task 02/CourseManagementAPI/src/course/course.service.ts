import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CourseService {
  getAllCourses() {
    return { message: 'All courses fetched successfully', data: [] };
  }

  getCourseById(id: string) {
    return { message: 'Course fetched successfully', id };
  }

  createCourse(dto: CreateCourseDto) {
    return {
      message: 'Course created successfully',
      data: dto,
    };
  }

  updateCourse(id: string, dto: UpdateCourseDto) {
    return {
      message: 'Course updated successfully',
      id,
      data: dto,
    };
  }

  patchCourse(id: string, dto: UpdateCourseDto) {
    const updatedFields = Object.keys(dto);
    return {
      message: 'Course patched successfully',
      id,
      updatedFields,
    };
  }

  deleteCourse(id: string) {
    return {
      message: 'Course deleted successfully',
      id,
    };
  }

  uploadCourseMaterial(id: string, file: Express.Multer.File) {
    const filename = file.filename;
    const filePath = `uploads/${filename}`;
    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename,
      path: filePath,
    };
  }
}
