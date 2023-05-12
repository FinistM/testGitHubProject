package com.finist.wellsback.controllers;

import com.finist.wellsback.models.VidPrichProstoiaBrigad;
import com.finist.wellsback.services.VidPrichProstoiaBrigadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody
@RequestMapping("/vidPrichProstBrig")                                                                                             //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200"})                                               //определяет источники запросов(может быть как один, так и несколько)
public class VidPrichProstoiaBrigadController {

    private final VidPrichProstoiaBrigadService service;//ссылка на сервис

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public VidPrichProstoiaBrigadController(VidPrichProstoiaBrigadService service){
        this.service = service;
    }

    @GetMapping
    //получение списка
    public List<VidPrichProstoiaBrigad> getAllVidPrichProstoiaBrigady() {
        System.out.println("Main page downloaded\nTable of prichin prostoia brigad downloaded");
        return service.getAllVidPrichProstoiaBrigady();
    }

    @GetMapping("/{id}")                                                                                                //получение одной строки
    public VidPrichProstoiaBrigad getVidPrichProstoiaBrigadId(@PathVariable("id")Long id) {
        System.out.println("Information about prichine prostoia brigad " + id + " sent");
        return service.getVidPrichProstoiaBrigadId(id);
    }

    @PutMapping("/{id}")                                                                                                //получение одной строки
    public VidPrichProstoiaBrigad editVidPrichProstoiaBrigad(@RequestBody VidPrichProstoiaBrigad p, @PathVariable("id")Long id) {
        System.out.println("Information about remond " + id + " changed");
        p.setId(id);
        return service.editVidPrichProstoiaBrigad(p);
    }

    @PostMapping
    public VidPrichProstoiaBrigad vidPrichProstoiaBrigadPostAdd(@RequestBody VidPrichProstoiaBrigad p) {
        System.out.println("Information about prichine prostoia brigad added");
        return service.vidPrichProstoiaBrigadPostAdd(p);
    }

    @DeleteMapping(path = {"/{id}"})
    public VidPrichProstoiaBrigad delete(@PathVariable ("id") long id) {
        System.out.println("Vid prichiny prostoia brigad " + id + " deleted");
        return service.delete(id);
    }
}