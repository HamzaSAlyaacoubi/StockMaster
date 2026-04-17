import React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, Cell } from "recharts";
import { useContext } from "react";
import { ProductsContext } from "@/contexts/ProductsContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const PricesChart = () => {
  const { products } = useContext(ProductsContext);

  const colors = [
    "#2563eb",
    "#22c55e",
    "#f59e0b",
    "#f43f5e",
    "#a855f7",
    "#06b6d4",
  ];

  const generateChartConfig = (products) => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    console.log(uniqueCategories);

    const config = {
      PrixHT: {
        label: "PrixHT",
      },
    };

    uniqueCategories.forEach((cat, index) => {
      config[cat] = {
        label: cat,
        color: colors[index], // loop colors
      };
    });

    return config;
  };
  const chartConfig = generateChartConfig(products);

  const groupByCategory = (products) => {
    const result = {};

    products.forEach((product) => {
      const category = product.category;

      if (!result[category]) {
        result[category] = 0;
      }

      result[category] += Number(product.priceHT);
    });

    return Object.keys(result).map((key) => ({
      Catégorie: key,
      PrixHT: result[key],
    }));
  };
  const groupedData = groupByCategory(products);
  const total = groupedData.reduce((acc, curr) => acc + curr.PrixHT, 0);

  const getColor = (category) => chartConfig[category]?.color ?? "#2563eb";

  return (
    <div>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Prix</CardTitle>
          <CardDescription>Répartition des prix par catégorie</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 pb-0">
          <ChartContainer config={chartConfig} className="w-full ">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={groupedData}
                dataKey="PrixHT"
                nameKey="Catégorie"
                innerRadius={55}
                strokeWidth={6}
              >
                {groupedData.map((entry) => (
                  <Cell
                    key={`cell-${entry.Catégorie}`}
                    fill={getColor(entry.Catégorie)}
                  />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy - 24}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {total.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0)}
                            className="fill-muted-foreground"
                          >
                            Dirhams
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="Catégorie" />}
                className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
              />
            </PieChart>
            <ChartLegend
              content={<ChartLegendContent nameKey="Catégorie" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </ChartContainer>
        </CardContent>

        {/* <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium">
            Distribution des catégories
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
};
