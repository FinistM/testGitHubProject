package com.finist.wellsback.controllers;

import com.finist.wellsback.models.Vid;
import com.finist.wellsback.repository.VidRepository;
import com.finist.wellsback.services.VidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody
@RequestMapping("/vidy")                                                                                              //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200"})                                              //определяет источники запросов(может быть как один, так и несколько)
public class VidController {

    private final VidService service;
    private VidRepository repository;//ссылка на сервис

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public VidController(VidService service){
        this.service = service;
    }

    @GetMapping
    //получение списка
    public List<Vid> getAllVidy() {
        System.out.println("All data on site");
        return service.getAllVidy();
    }

    @GetMapping("/{id}")                                                                                                //получение одной строки
    public Vid getVidId(@PathVariable("id")Long id) {
        return service.getVidId(id);
    }

    @PutMapping("/{id}")                                                                                                //получение одной строки
    public Vid editVid(@RequestBody Vid v, @PathVariable("id")Long id) {
        v.setId(id);
        System.out.println("Data for saving: " + v.getId() + " " + v.getName());
        return service.editVid(v);
    }

    @PostMapping                                                                                                      // обработчик PostMapping т.к. используется метод post (см. method="post" в blog-add)
    public Vid vidPostAdd(@RequestBody Vid v) {
        System.out.println("Информация получена" + v);
        return service.vidPostAdd(v);
    }


    @DeleteMapping(path = {"/{id}"})                                                                                                              // обработчик PostMapping т.к. используется метод post (см. method="post" в blog-add)
    public Vid delete(@PathVariable ("id") long id) {         // получение данных из полей по именам атрибутов (см. файл blog-add)
        System.out.println("Data for delete: " + id);
        return service.delete(id);
    }
}