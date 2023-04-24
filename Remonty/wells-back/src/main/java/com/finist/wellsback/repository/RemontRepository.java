package com.finist.wellsback.repository;

import com.finist.wellsback.models.Remont;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RemontRepository extends CrudRepository<Remont, Long> {
        List<Remont> findByOrderBySkvajinaAscKystAscMestorojdenieAsc();                                                 //задает запрос с параметрами сортировки
}
