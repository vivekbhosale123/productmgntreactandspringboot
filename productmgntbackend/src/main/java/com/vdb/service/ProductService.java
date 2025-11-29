package com.vdb.service;


import com.vdb.entity.Product;
import com.vdb.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product addProduct(Product product)
    {
        return productRepository.save(product);
    }

    public List<Product> findAll()
    {
        return productRepository.findAll();
    }

}
