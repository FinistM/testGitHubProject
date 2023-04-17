package com.finist.wellsback.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Time;
import java.sql.Date;

@Entity                                                                                                                 //класс типа Entity указывает на класс, который на абстрактном уровне связан с таблицей в базе данных. Каждый объект, созданный этим классом, указывает на кортеж самой таблицы, содержащий информацию последней.
@Setter                                                                                                                 // генерирует set для каждого аргумента
@Getter                                                                                                                 // генерирует get для каждого аргумента
@AllArgsConstructor                                                                                                     // генерирует метод со всеми аргументами
@NoArgsConstructor                                                                                                      // генерирует пустой метод

@Table(name = "remonty")
public class Remont {

    @Id
    @GeneratedValue                                                                                                     //автоматическая генерация значения
    private Long id;

    @Column(name = "skvajina")                                                                                          //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String skvajina;


    @Column(name = "kyst")                                                                                              //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String kyst;


    @Column(name = "mestorojdenie")                                                                                     //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String mestorojdenie;

    @ManyToOne(optional=true, fetch = FetchType.EAGER, cascade=CascadeType.REFRESH)                                     //@ManyToOne определяет однозначную ассоциацию с другим классом сущностей, который имеет кратность «многие к одному».
    @JoinColumn(name = " vid_remonta", nullable = true)
    private Vid vid_remonta;

    @Column(name = "prichina")                                                                                          //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String prichina;


    @Temporal(TemporalType.DATE)                                                                                        //аннотация @Temporal  решает одну из основных проблем преобразования значений даты и времени из объекта Java в совместимый тип базы данных и их возврат в приложение.
    private Date date_start;

    @Temporal(TemporalType.TIME)                                                                                        //аннотация @Temporal  решает одну из основных проблем преобразования значений даты и времени из объекта Java в совместимый тип базы данных и их возврат в приложение.
    private Time time_start;


    @Temporal(TemporalType.DATE)                                                                                        //аннотация @Temporal  решает одну из основных проблем преобразования значений даты и времени из объекта Java в совместимый тип базы данных и их возврат в приложение.
    private Date date_end;


    @Temporal(TemporalType.TIME)                                                                                        //аннотация @Temporal  решает одну из основных проблем преобразования значений даты и времени из объекта Java в совместимый тип базы данных и их возврат в приложение.
    private Time time_end;

    @Column(name = "brigada")                                                                                           //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String brigada;

    @Column(name = "primechanie")                                                                                       //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String primechanie;
}
