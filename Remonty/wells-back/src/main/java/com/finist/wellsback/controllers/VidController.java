package com.finist.wellsback.controllers;

import com.finist.wellsback.models.Details;
import com.finist.wellsback.models.Vid;
import com.finist.wellsback.services.VidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController                                                                                                         //это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody
@RequestMapping("/vidy")                                                                                                //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200"})                                               //определяет источники запросов(может быть как один, так и несколько)
public class VidController {

    private final VidService service;//ссылка на сервис

    @Autowired                                                                                                          //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public VidController(VidService service){
        this.service = service;
    }

    @GetMapping
    public List<Vid> getAllVidy() {
        System.out.println("Table of vidy downloaded");
        return service.getAllVidy();
    }

    @GetMapping("/det")
    public List<Details> getDitalisation() {
        System.out.println("Detalization updated");
        return service.ditalisationGet();
    }

    @GetMapping("/{id}")                                                                                                //получение одной строки
    public Vid getVidId(@PathVariable("id")Long id) {
        System.out.println("Information about vid " + id + " sent");
        return service.getVidId(id);
    }

    @PutMapping("/{id}")                                                                                                //получение одной строки
    public Vid editVid(@RequestBody Vid v, @PathVariable("id")Long id) {
        System.out.println("Information about vid " + id + " changed");
        v.setId(id);
        return service.editVid(v);
    }

    @PostMapping
    public Vid vidPostAdd(@RequestBody Vid v) {
        System.out.println("Information about vid added");
        return service.vidPostAdd(v);
    }

    @DeleteMapping(path = {"/{id}"})
    public Vid delete(@PathVariable ("id") long id) {
        System.out.println("Vid " + id + " deleted");
        return service.delete(id);
    }
}