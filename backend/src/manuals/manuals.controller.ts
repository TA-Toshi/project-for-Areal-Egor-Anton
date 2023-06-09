import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { create_dto_manuals } from './dto/create_manuals.dto';
import { ManualsService } from './manuals.service';

@Controller('manuals')
export class ManualsController {

    constructor(private manuals_service: ManualsService) {}


    @Post('create_os')
    create_os(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.os_status_create(create_dto_manuals);
    }

    @Get('all_os')
    getAll_os() {
        return this.manuals_service.os_status_get_all();
    }

    @Get('os/:id')
    getById_os(@Param('id') id: string) {
        return this.manuals_service.os_status_check(id);
    }

    @Delete('os/:id')
    deleteById_os(@Param('id') id: string) {
        return this.manuals_service.os_status_delete(id);
    }

    @Put('os/:id')
    updateById_os(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.os_status_update(create_dto_manuals, id)
    }


    @Post('create_memory_type')
    create_memory_type(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.memory_type_status_create(create_dto_manuals);
    }

    @Get('all_memory_type')
    getAll_memory_type() {
        return this.manuals_service.memory_type_status_get_all();
    }

    @Get('memory_type/:id')
    getById_memory_type(@Param('id') id: string) {
        return this.manuals_service.memory_type_status_check(id);
    }

    @Delete('memory_type/:id')
    deleteById_memory_type(@Param('id') id: string) {
        return this.manuals_service.memory_type_status_delete(id);
    }

    @Put('memory_type/:id')
    updateById_memory_type(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.memory_type_status_update(create_dto_manuals, id)
    }


    @Post('create_disk')
    create_disk(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.disk_status_create(create_dto_manuals);
    }

    @Get('all_disk')
    getAll_disk() {
        return this.manuals_service.disk_status_get_all();
    }

    @Get('disk/:id')
    getById_disk(@Param('id') id: string) {
        return this.manuals_service.disk_status_check(id);
    }

    @Delete('disk/:id')
    deleteById_disk(@Param('id') id: string) {
        return this.manuals_service.disk_status_delete(id);
    }

    @Put('disk/:id')
    updateById_disk(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.disk_status_update(create_dto_manuals, id)
    }


    @Post('create_backup')
    create_backup(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.backup_status_create(create_dto_manuals);
    }

    @Get('all_backup')
    getAll_backup() {
        return this.manuals_service.backup_status_get_all();
    }

    @Get('backup/:id')
    getById_backup(@Param('id') id: string) {
        return this.manuals_service.backup_status_check(id);
    }

    @Delete('backup/:id')
    deleteById_backup(@Param('id') id: string) {
        return this.manuals_service.backup_status_delete(id);
    }

    @Put('backup/:id')
    updateById_backup(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.backup_status_update(create_dto_manuals, id)
    }


    @Post('create_zabbix_agent')
    create_zabbix_agent(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.zabbix_agent_status_create(create_dto_manuals);
    }

    @Get('all_zabbix_agent')
    getAll_zabbix_agent() {
        return this.manuals_service.zabbix_agent_status_get_all();
    }

    @Get('zabbix_agent/:id')
    getById_zabbix_agent(@Param('id') id: string) {
        return this.manuals_service.zabbix_agent_status_check(id);
    }

    @Delete('zabbix_agent/:id')
    deleteById_zabbix_agent(@Param('id') id: string) {
        return this.manuals_service.zabbix_agent_status_delete(id);
    }

    @Put('zabbix_agent/:id')
    updateById_zabbix_agent(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.zabbix_agent_status_update(create_dto_manuals, id)
    }


    @Post('create_location')
    create_location(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.location_status_create(create_dto_manuals);
    }

    @Get('all_location')
    getAll_location() {
        return this.manuals_service.location_status_get_all();
    }

    @Get('location/:id')
    getById_location(@Param('id') id: string) {
        return this.manuals_service.location_status_check(id);
    }

    @Delete('location/:id')
    deleteById_location(@Param('id') id: string) {
        return this.manuals_service.location_status_delete(id);
    }

    @Put('location/:id')
    updateById_location(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.location_status_update(create_dto_manuals, id)
    }

    @Post('create_backup_physical_machine')
    create_backup_physical_machine(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.backup_physical_machine_status_create(create_dto_manuals);
    }

    @Get('all_backup_physical_machine')
    getAll_backup_physical_machine() {
        return this.manuals_service.backup_physical_machine_status_get_all();
    }

    @Get('backup_physical_machine/:id')
    getById_backup_physical_machine(@Param('id') id: string) {
        return this.manuals_service.backup_physical_machine_status_check(id);
    }

    @Delete('backup_physical_machine/:id')
    deleteById_backup_physical_machine(@Param('id') id: string) {
        return this.manuals_service.backup_physical_machine_status_delete(id);
    }

    @Put('backup_physical_machine/:id')
    updateById_backup_physical_machine(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.backup_physical_machine_status_update(create_dto_manuals, id)
    }


    @Post('create_vm_status')
    create_vm_status(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.vm_status_status_create(create_dto_manuals);
    }

    @Get('all_vm_status')
    getAll_vm_status() {
        return this.manuals_service.vm_status_status_get_all();
    }

    @Get('vm_status/:id')
    getById_vm_status(@Param('id') id: string) {
        return this.manuals_service.vm_status_status_check(id);
    }

    @Delete('vm_status/:id')
    deleteById_vm_status(@Param('id') id: string) {
        return this.manuals_service.vm_status_status_delete(id);
    }

    @Put('vm_status/:id')
    updateById_vm_status(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.vm_status_status_update(create_dto_manuals, id)
    }


    @Post('create_disk_location')
    create_disk_location(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.disk_location_status_create(create_dto_manuals);
    }

    @Get('all_disk_location')
    getAll_disk_location() {
        return this.manuals_service.disk_location_status_get_all();
    }

    @Get('disk_location/:id')
    getById_disk_location(@Param('id') id: string) {
        return this.manuals_service.disk_location_status_check(id);
    }

    @Delete('disk_location/:id')
    deleteById_disk_location(@Param('id') id: string) {
        return this.manuals_service.disk_location_status_delete(id);
    }

    @Put('disk_location/:id')
    updateById_disk_location(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.disk_location_status_update(create_dto_manuals, id)
    }


    @Post('create_backup_creation_mechanism')
    create_backup_creation_mechanism(@Body() create_dto_manuals: create_dto_manuals) {
        return this.manuals_service.backup_creation_mechanism_status_create(create_dto_manuals);
    }

    @Get('all_backup_creation_mechanism')
    getAll_backup_creation_mechanism() {
        return this.manuals_service.backup_creation_mechanism_status_get_all();
    }

    @Get('backup_creation_mechanism/:id')
    getById_backup_creation_mechanism(@Param('id') id: string) {
        return this.manuals_service.backup_creation_mechanism_status_check(id);
    }

    @Delete('backup_creation_mechanism/:id')
    deleteById_backup_creation_mechanism(@Param('id') id: string) {
        return this.manuals_service.backup_creation_mechanism_status_delete(id);
    }

    @Put('backup_creation_mechanism/:id')
    updateById_backup_creation_mechanism(@Body() create_dto_manuals: create_dto_manuals, @Param('id') id: string) {
        return this.manuals_service.backup_creation_mechanism_status_update(create_dto_manuals, id)
    }
}
