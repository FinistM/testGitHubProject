package com.finist.wellsback.controllers;

import com.finist.wellsback.models.Remont;
import com.finist.wellsback.services.RemontService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController                                                                                                         //это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody
@RequestMapping("/remonty")                                                                                             //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200","http://localhost:4251"})                                               //определяет источники запросов(может быть как один, так и несколько)
public class RemontController {

    private final RemontService service;//ссылка на сервис

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public RemontController(RemontService service){
        this.service = service;
    }

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/det")
    public List<Map<String, Object>> getUsers() {
        String sql = "WITH t as (SELECT r.*, v.name FROM remonty as r	FULL OUTER JOIN vidy as v ON r.vid_remonta = v.id) SELECT name, cast(concat_ws('',COUNT(id)) as varchar) as col, CASE WHEN COUNT(id)=0 THEN cast('...' as varchar) ELSE array_to_string(array_agg(concat_ws('  ',concat_ws(' - ', date_start, date_end),concat_ws('/', skvajina, kyst, mestorojdenie))),';     ' ) END detalization FROM t GROUP BY name";
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql);
        for (Map<String, Object> row : rows) {
            String column1Value = (String) row.get("name");
            String column2Value = (String) row.get("col");
            String column3Value = (String) row.get("detalization");
        }
        return rows;
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