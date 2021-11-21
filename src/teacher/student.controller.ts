import { Controller, Get, Param, Put } from "@nestjs/common";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ) {
        return `Get All Students That Belong To The Teacher With An Id Of ${teacherId}`
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('StudentId') studentId: string
    ) {
        return `Update Student With Id of ${studentId} To Teacher With Id of ${teacherId}`
    }
}

