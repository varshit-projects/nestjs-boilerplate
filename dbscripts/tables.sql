

----------------------------------------------------------------------------------------
CREATE TABLE  IF NOT EXISTS role (
	id uuid NOT NULL UNIQUE Default uuid_generate_v4 (),
	name VARCHAR NOT NULL,
    level int not null    
);
-----------------------------------------------------------------------------------------
CREATE TABLE  IF NOT EXISTS libuser (
	id uuid NOT NULL UNIQUE Default uuid_generate_v4 (),
	first_name VARCHAR NOT NULL, 
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    phone VARCHAR,
    hash VARCHAR NOT NULL,
    isEmailVerified Boolean Not null Default FALSE,
    isPhoneVerified Boolean Not Null Default FALSE,
    RoleId uuid,
    createdAt timestamp not null default CURRENT_TIMESTAMP,
     
    PRIMARY KEY (id),
    FOREIGN KEY(RoleId) REFERENCES Role(id)
);


