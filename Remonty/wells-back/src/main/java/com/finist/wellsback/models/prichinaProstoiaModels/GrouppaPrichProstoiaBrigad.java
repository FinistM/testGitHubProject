package com.finist.wellsback.models.prichinaProstoiaModels;

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

@Table(name = "groupPrichProstBrig1")
public class GrouppaPrichProstoiaBrigad {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "grouppa")
    private String grouppa;

    @Column(name = "arhivgrouppa")
    private Boolean arhivgrouppa;
}