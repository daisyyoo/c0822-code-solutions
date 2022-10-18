select count("countryId") as "numberofCities",
      "countries"."name" as "Country Name"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
