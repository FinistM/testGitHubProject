package com.finist.wellsback.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Entity                                                                                                                 //класс типа Entity указывает на класс, который на абстрактном уровне связан с таблицей в базе данных. Каждый объект, созданный этим классом, указывает на кортеж самой таблицы, содержащий информацию последней.
@Setter                                                                                                                 // генерирует set для каждого аргумента
@Getter                                                                                                                 // генерирует get для каждого аргумента
@AllArgsConstructor                                                                                                     // генерирует метод со всеми аргументами
@NoArgsConstructor

@Table(name = "dettab")
public class Details {

    @Id
    @Column(name = "name")
    private String name;

    @Column(name = "col")                                                                                          //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String col;

    @Column(name = "detalization")                                                                                              //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String detalization;

}
