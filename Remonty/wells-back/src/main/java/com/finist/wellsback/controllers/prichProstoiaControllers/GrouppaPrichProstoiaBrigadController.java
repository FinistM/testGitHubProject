package com.finist.wellsback.controllers.prichProstoiaControllers;

import com.finist.wellsback.models.prichinaProstoiaModels.GrouppaPrichProstoiaBrigad;
import com.finist.wellsback.services.prichinaProstoiaServices.GrouppaPrichProstoiaBrigadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController                                                                                                         //это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody

@RequestMapping("/groupPrichProstBrig")                                                                                      //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200","http://localhost:4251"})                                               //определяет источники запросов(может быть как один, так и несколько)
public class GrouppaPrichProstoiaBrigadController {

    private final GrouppaPrichProstoiaBrigadService service;//ссылка на сервис

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public GrouppaPrichProstoiaBrigadController(GrouppaPrichProstoiaBrigadService service){
        this.service = service;
    }

    @GetMapping
    //получение списка
    public List<GrouppaPrichProstoiaBrigad> getAllPrichProstoiaBrigady() {
        System.out.println("Information about group of prichin prostoia brigad downloaded");
        return service.getAllGrouppaPrichProstoiaBrigad();
    }

    @GetMapping("/{id}")                                                                                                //получение одной строки
    public GrouppaPrichProstoiaBrigad getPrichProstoiaBrigadId(@PathVariable("id")Long id) {
        System.out.println("Information about group of prichin prostoia brigad " + id + " sent");
        return service.getGrouppaPrichProstoiaBrigadId(id);
    }

    @PutMapping("/{id}")                                                                                                //получение одной строки
    public GrouppaPrichProstoiaBrigad editPrichProstoiaBrigad(@RequestBody GrouppaPrichProstoiaBrigad p,
                                                              @PathVariable("id")Long id) {
        System.out.println("Information about group of prichin prostoia brigad " + id + " changed");
        p.setId(id);
        return service.editGrouppaPrichProstoiaBrigad(p);
    }

    @PostMapping
    public GrouppaPrichProstoiaBrigad prichProstoiaBrigadPostAdd(@RequestBody GrouppaPrichProstoiaBrigad p) {
        System.out.println("Information about group of prichin prostoia brigad added");
        return service.grouppaPrichProstoiaBrigadPostAdd(p);
    }

    @DeleteMapping(path = {"/{id}"})
    public GrouppaPrichProstoiaBrigad delete(@PathVariable ("id") long id) {
        System.out.println("Group of prichin " + id + " deleted");
        return service.delete(id);
    }
}