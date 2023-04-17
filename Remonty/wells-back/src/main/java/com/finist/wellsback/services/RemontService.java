package com.finist.wellsback.services;

import com.finist.wellsback.models.Remont;
import com.finist.wellsback.repository.RemontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RemontService {
    private final RemontRepository repository;

    @Autowired
    public RemontService(RemontRepository repository) { this.repository = repository; }

    public List<Remont> getAllRemonty() {
        return (List<Remont>) repository.findByOrderBySkvajinaAscKystAscMestorojdenieAsc();
    }

    public Remont getRemontId(long id) { return repository.findById(id).get(); }

    public Remont remontPostAdd(Remont r){ return repository.save(r); }

    public Remont editRemont(Remont r) {
        return repository.save(r);
    }

    public Remont delete(long id) {
        Remont r=repository.findById(id).get();
        if(r!=null){ repository.delete(r); }
        return r;
    }
}
