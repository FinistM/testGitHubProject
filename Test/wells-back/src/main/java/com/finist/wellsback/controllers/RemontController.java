package com.finist.wellsback.controllers;

import com.finist.wellsback.models.Remont;
import com.finist.wellsback.repository.RemontRepository;
import com.finist.wellsback.services.RemontService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody
@RequestMapping("/remonty")                                                                                              //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200"})                                              //определяет источники запросов(может быть как один, так и несколько)
public class RemontController {

    private final RemontService service;
    private RemontRepository repository;//ссылка на сервис

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public RemontController(RemontService service){
        this.service = service;
    }

    @GetMapping
    //получение списка
    public List<Remont> getAllRemonty() {
        System.out.println("All data on site");
        return service.getAllRemonty();
    }

    @GetMapping("/{id}")                                                                                                //получение одной строки
    public Remont getRemontId(@PathVariable("id")Long id) {
        return service.getRemontId(id);
    }

    @PutMapping("/{id}")                                                                                                //получение одной строки
    public Remont editRemont(@RequestBody Remont r, @PathVariable("id")Long id) {
        r.setId(id);
        System.out.println("Data for saving: " + r.getId() + " " + r.getSkvajina() + " " + r.getKyst() + " " + r.getMestorojdenie() + " " + r.getVid_remonta() + " " + r.getPrichina() + " " + r.getStart_date_day() + "-" + r.getStart_date_month() + "-" + r.getStart_date_year() + " " + r.getStart_time_hour() + ":" + r.getStart_time_minute()  + " " + r.getEnd_date_day() + "-" + r.getEnd_date_month() + "-" + r.getEnd_date_year() + " " + r.getEnd_time_hour() + ":" + r.getEnd_time_minute() + " " + r.getBrigada() + " " + r.getPrimechanie());
        return service.editRemont(r);
    }

    @PostMapping                                                                                                      // обработчик PostMapping т.к. используется метод post (см. method="post" в blog-add)
    public Remont remontPostAdd(@RequestBody Remont r) {
        System.out.println("Информация получена" + r);
        return service.remontPostAdd(r);
    }

//    @PostMapping                                                                                                              // обработчик PostMapping т.к. используется метод post (см. method="post" в blog-add)
//    public String remontPostAdd(@RequestBody String skvajina, @RequestBody String kyst, @RequestBody String mestorojdenie, @RequestBody String vid_remonta, @RequestBody String prichina, @RequestBody String start_date_year, @RequestBody String start_date_month, @RequestBody String start_date_day, @RequestBody String start_time_hour, @RequestBody String start_time_minute, @RequestBody String end_date_year, @RequestBody String end_date_month, @RequestBody String end_date_day, @RequestBody String end_time_hour, @RequestBody String end_time_minute, @RequestBody String brigada, @RequestBody String primechanie, Model model) {         // получение данных из полей по именам атрибутов (см. файл blog-add)
//        System.out.println("Data added");
//        service.remontPostAdd(skvajina, kyst, mestorojdenie, vid_remonta, prichina, start_date_year, start_date_month, start_date_day, start_time_hour, start_time_minute, end_date_year, end_date_month, end_date_day, end_time_hour, end_time_minute, brigada, primechanie);
//        return "";
//    }

    @DeleteMapping(path = {"/{id}"})                                                                                                              // обработчик PostMapping т.к. используется метод post (см. method="post" в blog-add)
    public Remont delete(@PathVariable ("id") long id) {         // получение данных из полей по именам атрибутов (см. файл blog-add)
        System.out.println("Data for delete: " + id);
        return service.delete(id);
    }
}