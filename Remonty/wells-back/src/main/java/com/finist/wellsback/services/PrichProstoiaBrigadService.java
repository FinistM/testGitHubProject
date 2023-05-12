package com.finist.wellsback.services;

import com.finist.wellsback.models.PrichProstoiaBrigad;
import com.finist.wellsback.repository.PrichProstoiaBrigadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PrichProstoiaBrigadService {
    private final PrichProstoiaBrigadRepository repository;

    @Autowired
    public PrichProstoiaBrigadService(PrichProstoiaBrigadRepository repository) { this.repository = repository; }

    public List<PrichProstoiaBrigad> getAllPrichProstoiaBrigady() {
        return (List<PrichProstoiaBrigad>) repository.findAll();
    }

    public PrichProstoiaBrigad getPrichProstoiaBrigadId(long id) { return repository.findById(id).get(); }

    public PrichProstoiaBrigad prichProstoiaBrigadPostAdd(PrichProstoiaBrigad p){ return repository.save(p); }

    public PrichProstoiaBrigad editPrichProstoiaBrigad(PrichProstoiaBrigad p) {
        return repository.save(p);
    }

    public PrichProstoiaBrigad delete(long id) {
        PrichProstoiaBrigad p=repository.findById(id).get();
        if(p!=null){ repository.delete(p); }
        return p;
    }
}
