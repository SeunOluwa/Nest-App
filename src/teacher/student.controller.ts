import { Controller, Get, Param, Put } from "@nestjs/common";
import { FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ): FindStudentResponseDto[] {
        return `Get All Students That Belong To The Teacher With An Id Of ${teacherId}`
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('StudentId') studentId: string
    ): StudentResponseDto {
        return `Update Student With Id of ${studentId} To Teacher With Id of ${teacherId}`
    }
}
