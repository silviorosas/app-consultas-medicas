package com.tutorial.crud.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.tutorial.crud.entity.Consulta;

public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
}
