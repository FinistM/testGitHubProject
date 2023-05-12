package com.finist.wellsback.repository;

import com.finist.wellsback.models.PrichProstoiaBrigad;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrichProstoiaBrigadRepository extends CrudRepository<PrichProstoiaBrigad, Long> {
    List<PrichProstoiaBrigad> findAll();
}
