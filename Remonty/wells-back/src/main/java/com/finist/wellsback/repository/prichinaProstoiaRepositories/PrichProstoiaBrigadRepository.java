package com.finist.wellsback.repository.prichinaProstoiaRepositories;

import com.finist.wellsback.models.prichinaProstoiaModels.PrichProstoiaBrigad;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PrichProstoiaBrigadRepository extends CrudRepository<PrichProstoiaBrigad, Long> {
    List<PrichProstoiaBrigad> findByOrderByPrichinaAsc();
}
