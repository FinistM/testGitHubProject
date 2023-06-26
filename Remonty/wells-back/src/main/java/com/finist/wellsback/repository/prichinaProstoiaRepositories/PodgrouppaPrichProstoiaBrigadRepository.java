package com.finist.wellsback.repository.prichinaProstoiaRepositories;

import com.finist.wellsback.models.prichinaProstoiaModels.PodgrouppaPrichProstoiaBrigad;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PodgrouppaPrichProstoiaBrigadRepository extends CrudRepository<PodgrouppaPrichProstoiaBrigad, Long> {
    List<PodgrouppaPrichProstoiaBrigad> findByOrderByPodgrouppaAsc();
}
