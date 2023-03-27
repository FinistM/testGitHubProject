package com.finist.wellsback.services;

import com.finist.wellsback.models.Remont;
import com.finist.wellsback.repository.RemontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RemontService {
    private final RemontRepository repository;

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент
    public RemontService(RemontRepository repository) {
        this.repository = repository;
    }

    public List<Remont> getAllRemonty() {
        return (List<Remont>) repository.findAll();
    }

    public Remont getRemontId(long id) {
        System.out.println("getRemontId sent data"); return repository.findById(id).get();
    }

    // обработчик PostMapping т.к. используется метод post (см. method="post" в blog-add)
    public Remont remontPostAdd(Remont r){         // получение данных из полей по именам атрибутов (см. файл blog-add)
        System.out.println("Информация получена");
        return repository.save(r);
        //return repository.save(r);
    }

    /*public String remontPostAdd(String skvajina, String kyst, String mestorojdenie, String vid_remonta, String prichina, String start_date_year, String start_date_month, String start_date_day, String start_time_hour, String start_time_minute, String end_date_year, String end_date_month, String end_date_day, String end_time_hour, String end_time_minute, String brigada, String primechanie) {         // получение данных из полей по именам атрибутов (см. файл blog-add)
        Remont remont = new Remont(skvajina, kyst, mestorojdenie, vid_remonta, prichina, start_date_year, start_date_month, start_date_day, start_time_hour, start_time_minute, end_date_year, end_date_month, end_date_day, end_time_hour, end_time_minute, brigada, primechanie);
        repository.save(remont);
        return "";
    }*/

    public Remont editRemont(Remont r) {
        return repository.save(r);
    }

    public Remont delete(long id) {
        Remont r=repository.findById(id).get();
        if(r!=null){
            repository.delete(r);
        }
        return r;
    }
}
