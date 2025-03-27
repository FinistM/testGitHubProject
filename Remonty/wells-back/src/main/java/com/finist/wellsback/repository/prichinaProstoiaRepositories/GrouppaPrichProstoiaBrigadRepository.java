package com.finist.wellsback.repository.prichinaProstoiaRepositories;

import com.finist.wellsback.models.prichinaProstoiaModels.GrouppaPrichProstoiaBrigad;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GrouppaPrichProstoiaBrigadRepository extends CrudRepository<GrouppaPrichProstoiaBrigad, Long> {
    List<GrouppaPrichProstoiaBrigad> findByOrderByGrouppaAsc();
}
