package com.finist.wellsback.controllers;

import com.finist.wellsback.models.Remont;
import com.finist.wellsback.services.RemontService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController                                                                                                         //это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody
@RequestMapping("/remonty")                                                                                             //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200"})                                               //определяет источники запросов(может быть как один, так и несколько)
public class RemontController {

    private final RemontService service;//ссылка на сервис

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public RemontController(RemontService service){
        this.service = service;
    }

    @GetMapping
    //получение списка
    public List<Remont> getAllRemonty() {
        System.out.println("Main page downloaded\nTable of remont downloaded");
        return service.getAllRemonty();
    }

    @GetMapping("/{id}")                                                                                                //получение одной строки
    public Remont getRemontId(@PathVariable("id")Long id) {
        System.out.println("Information about remond " + id + " sent");
        return service.getRemontId(id);
    }

    @PutMapping("/{id}")                                                                                                //получение одной строки
    public Remont editRemont(@RequestBody Remont r, @PathVariable("id")Long id) {
        System.out.println("Information about remond " + id + " changed");
        r.setId(id);
        return service.editRemont(r);
    }

    @PostMapping
    public Remont remontPostAdd(@RequestBody Remont r) {
        System.out.println("Information about remont added");
        return service.remontPostAdd(r);
    }

    @DeleteMapping(path = {"/{id}"})
    public Remont delete(@PathVariable ("id") long id) {
        System.out.println("Remont " + id + " deleted");
        return service.delete(id);
    }
}