package com.finist.wellsback.services.prichinaProstoiaServices;

import com.finist.wellsback.models.prichinaProstoiaModels.GrouppaPrichProstoiaBrigad;
import com.finist.wellsback.repository.prichinaProstoiaRepositories.GrouppaPrichProstoiaBrigadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class GrouppaPrichProstoiaBrigadService {
    private final GrouppaPrichProstoiaBrigadRepository repository;

    @Autowired
    public GrouppaPrichProstoiaBrigadService(GrouppaPrichProstoiaBrigadRepository repository) { this.repository = repository; }

    public List<GrouppaPrichProstoiaBrigad> getAllGrouppaPrichProstoiaBrigad() {
        return (List<GrouppaPrichProstoiaBrigad>) repository.findByOrderByGrouppaAsc();
    }

    public GrouppaPrichProstoiaBrigad getGrouppaPrichProstoiaBrigadId(long id) { return repository.findById(id).get(); }

    public GrouppaPrichProstoiaBrigad grouppaPrichProstoiaBrigadPostAdd(GrouppaPrichProstoiaBrigad g){ return repository.save(g); }

    public GrouppaPrichProstoiaBrigad editGrouppaPrichProstoiaBrigad(GrouppaPrichProstoiaBrigad g) { return repository.save(g); }

    public GrouppaPrichProstoiaBrigad delete(long id) {
        GrouppaPrichProstoiaBrigad g=repository.findById(id).get();
        if(g!=null){ repository.delete(g); }
        return g;
    }
}
