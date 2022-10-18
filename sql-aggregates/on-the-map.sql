-- list number of cities per country in countries table

select count("countryId") as "numberofCities",
      "countries"."name"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
