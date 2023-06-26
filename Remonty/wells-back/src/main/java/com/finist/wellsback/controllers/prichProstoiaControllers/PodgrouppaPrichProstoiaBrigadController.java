package com.finist.wellsback.controllers.prichProstoiaControllers;

import com.finist.wellsback.models.prichinaProstoiaModels.PodgrouppaPrichProstoiaBrigad;
import com.finist.wellsback.services.prichinaProstoiaServices.PodgrouppaPrichProstoiaBrigadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController                                                                                                         //это удобная аннотация, объединяющая @Controller и @ResponseBody , что устраняет необходимость аннотировать каждый метод обработки запросов класса контроллера аннотацией @ResponseBody

@RequestMapping("/podgroupPrichProstBrig")                                                                                      //аннотация @RequestMapping используется для сопоставления веб-запросов с методами Spring Controller.
@CrossOrigin(origins = {"http://localhost:4201","http://localhost:4200","http://localhost:4251"})                                               //определяет источники запросов(может быть как один, так и несколько)
public class PodgrouppaPrichProstoiaBrigadController {

    private final PodgrouppaPrichProstoiaBrigadService service;//ссылка на сервис

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент.
    public PodgrouppaPrichProstoiaBrigadController(PodgrouppaPrichProstoiaBrigadService service){
        this.service = service;
    }

    @GetMapping
    //получение списка
    public List<PodgrouppaPrichProstoiaBrigad> getAllPrichProstoiaBrigady() {
        System.out.println("Information about podgroup of prichin prostoia brigad downloaded");
        return service.getAllPodgrouppaPrichProstoiaBrigad();
    }

    @GetMapping("/{id}")                                                                                                //получение одной строки
    public PodgrouppaPrichProstoiaBrigad getPodgrouppaPrichProstoiaBrigadId(@PathVariable("id")Long id) {
        System.out.println("Information about podgroup of prichin prostoia brigad " + id + " sent");
        return service.getPodgrouppaPrichProstoiaBrigadId(id);
    }

    @PutMapping("/{id}")                                                                                                //получение одной строки
    public PodgrouppaPrichProstoiaBrigad editPodgrouppaPrichProstoiaBrigad(@RequestBody PodgrouppaPrichProstoiaBrigad p,
                                                              @PathVariable("id")Long id) {
        System.out.println("Information about podgroup of prichin prostoia brigad " + id + " changed");
        p.setId(id);
        return service.editPodgrouppaPrichProstoiaBrigad(p);
    }

    @PostMapping
    public PodgrouppaPrichProstoiaBrigad prichProstoiaBrigadPostAdd(@RequestBody PodgrouppaPrichProstoiaBrigad p) {
        System.out.println("Information about podgroup of prichin prostoia brigad added");
        return service.podgrouppaPrichProstoiaBrigadPostAdd(p);
    }

    @DeleteMapping(path = {"/{id}"})
    public PodgrouppaPrichProstoiaBrigad delete(@PathVariable ("id") long id) {
        System.out.println("Podgroup of prichin " + id + " deleted");
        return service.delete(id);
    }
}