select "customers"."firstName",
      "customers"."lastName",
      sum("amount") as "totalAmtPaid"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "totalAmtPaid" desc;
