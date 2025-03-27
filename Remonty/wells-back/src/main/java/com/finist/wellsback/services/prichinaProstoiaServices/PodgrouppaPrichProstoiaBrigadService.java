package com.finist.wellsback.services.prichinaProstoiaServices;

import com.finist.wellsback.models.prichinaProstoiaModels.PodgrouppaPrichProstoiaBrigad;
import com.finist.wellsback.repository.prichinaProstoiaRepositories.PodgrouppaPrichProstoiaBrigadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PodgrouppaPrichProstoiaBrigadService {
    private final PodgrouppaPrichProstoiaBrigadRepository repository;

    @Autowired
    public PodgrouppaPrichProstoiaBrigadService(PodgrouppaPrichProstoiaBrigadRepository repository) { this.repository = repository; }

    public List<PodgrouppaPrichProstoiaBrigad> getAllPodgrouppaPrichProstoiaBrigad() {
        return (List<PodgrouppaPrichProstoiaBrigad>) repository.findByOrderByPodgrouppaAsc();
    }

    public PodgrouppaPrichProstoiaBrigad getPodgrouppaPrichProstoiaBrigadId(long id) { return repository.findById(id).get(); }

    public PodgrouppaPrichProstoiaBrigad podgrouppaPrichProstoiaBrigadPostAdd(PodgrouppaPrichProstoiaBrigad p){ return repository.save(p); }

    public PodgrouppaPrichProstoiaBrigad editPodgrouppaPrichProstoiaBrigad(PodgrouppaPrichProstoiaBrigad p) {
        return repository.save(p);
    }

    public PodgrouppaPrichProstoiaBrigad delete(long id) {
        PodgrouppaPrichProstoiaBrigad p=repository.findById(id).get();
        if(p!=null){ repository.delete(p); }
        return p;
    }
}
