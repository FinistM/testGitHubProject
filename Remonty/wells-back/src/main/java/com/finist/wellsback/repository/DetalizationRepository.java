package com.finist.wellsback.repository;

import com.finist.wellsback.models.Details;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface DetalizationRepository extends CrudRepository<Details, String> {

    //@Query(value = "SELECT * FROM vidy", nativeQuery = true)
    @Query(value = "WITH t as (SELECT r.*, v.name FROM remonty as r	FULL OUTER JOIN vidy as v ON r.vid_remonta = v.id) SELECT name, cast(concat_ws('',COUNT(id)) as varchar) as col, CASE WHEN COUNT(id)=0 THEN cast('...' as varchar) ELSE array_to_string(array_agg(concat_ws('  ',concat_ws(' - ', date_start, date_end),concat_ws('/', skvajina, kyst, mestorojdenie))),';     ' ) END detalization FROM t GROUP BY name", nativeQuery = true)
    Collection<Details> findAll();/*List<String> ditalisationGet();*/
}