package com.vdb.controller;

import com.vdb.entity.Product;
import com.vdb.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    private final ProductService productService;

    @PostMapping("/addproduct")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        log.info("@@@@ Trying to add product {}", product.getProductName());
        return ResponseEntity.ok(productService.addProduct(product));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Product>> findAll() {
        return ResponseEntity.ok(productService.findAll());
    }

}
