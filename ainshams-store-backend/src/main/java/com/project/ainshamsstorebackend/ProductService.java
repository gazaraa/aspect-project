package com.project.ainshamsstorebackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepo;

    public List<Product> getAllProducts(){
        return productRepo.findAll();
    }

    public Product createProduct(Product product){
        return productRepo.save(product);
    }

    public Optional<Product> getProductById(long id){
        return productRepo.findById(id);
    }

    public Product updateProduct(Long id, Product productDTO) throws Exception {
        Optional<Product> optionalProduct = productRepo.findById(id);

        if (!optionalProduct.isPresent()){
            throw new Exception("Product with ID:"+id+" not found");
        }

        Product product = optionalProduct.get();
        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());
        product.setImage(productDTO.getImage());
        Product updatedProduct = productRepo.save(product);
        return updatedProduct;
    }

    public void deleteProduct(Long id) throws Exception{
        Optional<Product> optionalProduct = productRepo.findById(id);

        if (!optionalProduct.isPresent()){
            throw new Exception("Product with ID:"+id+" not found");
        }

        productRepo.deleteById(id);
    }
}
