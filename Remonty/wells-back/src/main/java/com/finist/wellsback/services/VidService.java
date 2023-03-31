package com.finist.wellsback.services;

import com.finist.wellsback.models.Vid;
import com.finist.wellsback.repository.VidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VidService {
    private final VidRepository repository;

    @Autowired
    //позволяет Spring разрешать и внедрять сторонние компоненты в наш компонент
    public VidService(VidRepository repository) {
        this.repository = repository;
    }

    public List<Vid> getAllVidy() {
        return (List<Vid>) repository.findAll();
    }

    public Vid getVidId(long id) {
        System.out.println("getVidId sent data"); return repository.findById(id).get();
    }

    // обработчик PostMapping т.к. используется метод post (см. method="post" в blog-add)
    public Vid vidPostAdd(Vid v){         // получение данных из полей по именам атрибутов (см. файл blog-add)
        System.out.println("Информация получена");
        return repository.save(v);
    }

    public Vid editVid(Vid v) {
        return repository.save(v);
    }

    public Vid delete(long id) {
        Vid v=repository.findById(id).get();
        if(v!=null){
            repository.delete(v);
        }
        return v;
    }
}
