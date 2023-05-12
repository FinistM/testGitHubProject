package com.finist.wellsback.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
//класс типа Entity указывает на класс, который на абстрактном уровне связан с таблицей в базе данных. Каждый объект, созданный этим классом, указывает на кортеж самой таблицы, содержащий информацию последней.
public class Details {

    @Id                                                                                                                  // указывает id как уникальный идентификатор
    private String name;
    private String col, detalization;

}