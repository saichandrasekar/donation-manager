delete from donation; 

drop table public.donation;

delete from expense; 

drop table public.expense;

CREATE TABLE public.DONATION (
	DONATION_ID integer NOT NULL GENERATED ALWAYS AS IDENTITY,
	PAYER_NAME varchar NOT NULL,
	DONATION_DATE date NOT NULL,
	PAYMENT_TYPE varchar NOT NULL,
	AMOUNT numeric(38, 2) NULL,
	PURPOSE_TYPE varchar NOT NULL,
	RECEIVER_NAME varchar NULL,
	INSERTED_BY varchar NOT NULL,
	INSERTED_TS timestamp NOT NULL
);
COMMENT ON TABLE public.DONATION IS 'To store the donation details';

CREATE TABLE public.EXPENSE (
	EXPENSE_ID integer NOT NULL GENERATED ALWAYS AS IDENTITY,
	EXPENSE_DATE date NOT NULL,
	AMOUNT numeric(38, 2) NULL,
	DOCUMENT_NAME varchar NOT NULL,
	DOCUMENT_PATH varchar NOT NULL,
	INSERTED_BY varchar NOT NULL,
	INSERTED_TS timestamp NOT NULL
);
COMMENT ON TABLE public.EXPENSE IS 'To store the expense details';

INSERT INTO public.donation (payer_name, donation_date, payment_type, amount, purpose_type, receiver_name, inserted_by, inserted_ts) VALUES('Chane', '2023-07-03', 'CASH', 100, 'OFFERING', 'John', 'Admin', current_timestamp);

INSERT INTO public.expense (expense_date, amount, document_name, document_path, inserted_by, inserted_ts) VALUES('2023-07-03', 100, 'gfhf.png', 'gsd/gsdfsf/sdfsfs/sdf.pdf', 'ADMIN', current_timestamp);
