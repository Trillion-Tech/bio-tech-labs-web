import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { products } from "../data/mockData";
import { ArrowLeft, Star, Check, Phone, Mail, Download } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find(p => p.id === parseInt(id));
  const relatedProducts = products.filter(p => p.id !== parseInt(id) && p.category === product?.category).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuoteRequest = () => {
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Download Started",
      description: "Product brochure is being downloaded.",
    });
  };

  // Mock additional images for gallery
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1576091160549-2173dba999ef?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&h=400&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-red-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index ? "border-red-600" : "border-gray-200"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-red-100 text-red-800 mb-4">{product.category}</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {product.detailedDescription}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(24 reviews)</span>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">{product.price}</div>
                <p className="text-gray-600 text-sm mb-4">
                  Includes installation, training, and 1-year warranty
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleQuoteRequest}
                    className="bg-red-600 hover:bg-red-700 flex-1"
                  >
                    Request Quote
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Key Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specifications" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>Detailed technical information and requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-900">{key}:</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Applications & Use Cases</CardTitle>
                  <CardDescription>Ideal environments and applications for this equipment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">{application}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Need help choosing?</h4>
                    <p className="text-blue-800 text-sm">
                      Our technical team can help you determine if this equipment is right for your facility. 
                      Contact us for a free consultation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Support & Documentation</CardTitle>
                  <CardDescription>Resources and support options for this product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      onClick={handleDownloadBrochure}
                      className="flex items-center justify-center space-x-2 h-12"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Brochure</span>
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex items-center justify-center space-x-2 h-12"
                    >
                      <Download className="w-4 h-4" />
                      <span>User Manual</span>
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Included Support:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Professional installation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Operator training</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">1-year warranty</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">24/7 technical support</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
                      {relatedProduct.name}
                    </CardTitle>
                    <CardDescription>
                      {relatedProduct.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link to={`/products/${relatedProduct.id}`}>
                        View Details
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;