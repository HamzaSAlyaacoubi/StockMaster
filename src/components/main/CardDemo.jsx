import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { v4 as uuidv4 } from "uuid";

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}

export function CardDemo() {
  const categories = ["Électroniques", "Vêtements", "Meubles", "Cosmetique"];

  const { products, setProducts } = useContext(ProductsContext);

  const formSchema = z.object({
    name: z
      .string()
      .min(5, "Name must be at least 5 characters.")
      .max(32, "Name must be at most 32 characters."),
    category: z
      .string()
      .min(2, "Category must be at least 2 characters.")
      .max(32, "Category must be at most 32 characters."),
    priceHT: z
      .number("You must enter a number")
      .min(0, "Price must be at least 0$."),
    tva: z
      .number("You must enter a number")
      .positive("TVA must be positive")
      .max(100, "TVA must be at most 100%."),
    stock: z
      .int("You must enter a integer")
      .min(1, "Stock must be at least 1."),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters.")
      .max(100, "Description must be at most 100 characters."),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    const newProduct = {
      id: uuidv4(),
      name: data.name,
      category: data.category,
      priceHT: data.priceHT,
      tva: data.tva,
      stock: data.stock,
      description: data.description,
    };
    const newProductsList = [...products, newProduct];
    setProducts(newProductsList);
    localStorage.setItem("products", JSON.stringify(newProductsList));

    reset();
  };
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">Ajouter un nouveau produit</CardTitle>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        <form id="product-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Dell Latitude 5680"
              />
              {errors.name && (
                <div className="text-red-400">{errors.name.message}</div>
              )}
            </div>
            {/* <div className="grid gap-2">
              <Label htmlFor="category">Categorie</Label>
              <Select {...register("category")} id="category">
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    {categories.map((cat) => {
                      return (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.category && (
                <div className="text-red-400">{errors.category.message}</div>
              )}
            </div> */}
            <div className="grid gap-2">
              <Label htmlFor="category">Categorie</Label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && (
                <div className="text-red-400">{errors.category.message}</div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="priceHT">Prix HT</Label>
              <Input
                {...register("priceHT", { valueAsNumber: true })}
                id="priceHT"
                type="number"
                placeholder="0 MAD"
              />
              {errors.priceHT && (
                <div className="text-red-400">{errors.priceHT.message}</div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tva">TVA</Label>
              <Input
                {...register("tva", { valueAsNumber: true })}
                id="tva"
                type="number"
                placeholder="20%"
              />
              {errors.tva && (
                <div className="text-red-400">{errors.tva.message}</div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stock">Nombre de stock</Label>
              <Input
                className="mb-0"
                {...register("stock", { valueAsNumber: true })}
                id="stock"
                type="number"
              />
              {errors.stock && (
                <div className="text-red-400">{errors.stock.message}</div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stock">Description</Label>
              <Textarea
                {...register("description")}
                placeholder="Ecrivez votre description du produit ici."
              />
              {errors.description && (
                <div className="text-red-400">{errors.description.message}</div>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" form="product-form" className="w-full">
          Valider
        </Button>
        <Button variant="outline" type="reset" className="w-full">
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
}
