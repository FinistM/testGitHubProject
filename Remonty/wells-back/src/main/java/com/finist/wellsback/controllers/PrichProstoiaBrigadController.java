package com.finist.wellsback.controllers;

import com.finist.wellsback.models.PrichProstoiaBrigad;
import com.finist.wellsback.services.PrichProstoiaBrigadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody
@RequestMapping("/prichProstBrig")                                                                                             //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200"})                                               //определяет источники запросов(может быть как один, так и несколько)
public class PrichProstoiaBrigadController {

    private final PrichProstoiaBrigadService service;//ссылка на сервис

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public PrichProstoiaBrigadController(PrichProstoiaBrigadService service){
        this.service = service;
    }

    @GetMapping
    //получение списка
    public List<PrichProstoiaBrigad> getAllPrichProstoiaBrigady() {
        System.out.println("Main page downloaded\nTable of prichin prostoia brigad downloaded");
        return service.getAllPrichProstoiaBrigady();
    }

    @GetMapping("/{id}")                                                                                                //получение одной строки
    public PrichProstoiaBrigad getPrichProstoiaBrigadId(@PathVariable("id")Long id) {
        System.out.println("Information about prichine prostoia brigad " + id + " sent");
        return service.getPrichProstoiaBrigadId(id);
    }

    @PutMapping("/{id}")                                                                                                //получение одной строки
    public PrichProstoiaBrigad editPrichProstoiaBrigad(@RequestBody PrichProstoiaBrigad p, @PathVariable("id")Long id) {
        System.out.println("Information about remond " + id + " changed");
        p.setId(id);
        return service.editPrichProstoiaBrigad(p);
    }

    @PostMapping
    public PrichProstoiaBrigad prichProstoiaBrigadPostAdd(@RequestBody PrichProstoiaBrigad p) {
        System.out.println("Information about prichine prostoia brigad added");
        return service.prichProstoiaBrigadPostAdd(p);
    }

    @DeleteMapping(path = {"/{id}"})
    public PrichProstoiaBrigad delete(@PathVariable ("id") long id) {
        System.out.println("Prichina " + id + " deleted");
        return service.delete(id);
    }
}