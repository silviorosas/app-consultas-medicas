package com.tutorial.crud.service;


import org.springframework.stereotype.Service;

import com.tutorial.crud.entity.Consulta;
import com.tutorial.crud.repository.ConsultaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ConsultaService {
    private final ConsultaRepository consultaRepository;

    public ConsultaService(ConsultaRepository consultaRepository) {
        this.consultaRepository = consultaRepository;
    }

    public List<Consulta> getAllConsultas() {
        return consultaRepository.findAll();
    }

    public Optional<Consulta> getConsultaById(Long id) {

        return consultaRepository.findById(id);
    }

    public Consulta createConsulta(Consulta consulta) {
        return consultaRepository.save(consulta);
    }

    public void deleteConsulta(Long id) {
        consultaRepository.deleteById(id);
    }

    public Consulta updateConsulta(Long id, Consulta consultaActualizada) {
        consultaActualizada.setId(id);
        return consultaRepository.save(consultaActualizada);
    }

    public boolean existeById(Long id) {
       return consultaRepository.existsById(id);
    }
}

