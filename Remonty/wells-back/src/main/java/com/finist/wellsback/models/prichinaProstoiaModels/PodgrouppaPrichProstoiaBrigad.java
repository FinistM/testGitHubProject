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

@Table(name = "podgroupPrichProstBrig1")
public class PodgrouppaPrichProstoiaBrigad {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "podgrouppa")
    private String podgrouppa;

    @Column(name = "arhivpodgrouppa")
    private Boolean arhivpodgrouppa;

    @ManyToOne(optional=true, fetch = FetchType.EAGER, cascade=CascadeType.REFRESH)                                     //@ManyToOne определяет однозначную ассоциацию с другим классом сущностей, который имеет кратность «многие к одному».
    @JoinColumn(name = "grouppa", nullable = true)
    private GrouppaPrichProstoiaBrigad grouppa;
}