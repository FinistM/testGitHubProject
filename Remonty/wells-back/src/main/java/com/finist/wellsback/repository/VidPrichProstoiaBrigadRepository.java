package com.finist.wellsback.repository;


import com.finist.wellsback.models.VidPrichProstoiaBrigad;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VidPrichProstoiaBrigadRepository extends CrudRepository<VidPrichProstoiaBrigad, Long> {
    List<VidPrichProstoiaBrigad> findAll();
}
