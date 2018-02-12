    export class TrafficAccident {
        public Id: number;
        public InputDate: Date;
        public EventDate: Date;
        public Employee: Employee;
        public Customer: Customer;
        public Cessionary: Employee;
        public Office: Office;
        public Adress: string;
        public Comment: string;
        public ShortName: string;
    }
    export class TrafficAccidentParticipant {
        public TrafficAccident: TrafficAccident;
        public Role: number;
        public Driver: Customer;
        public Auto: Auto;
    }
    export class BillingOperation {
        public Id: number;
        public DtpEvent: TrafficAccident;
        public BillingDate: Date;
        public BillType: BillingType;
        public FinCustomer: Customer;
        public Summ: number;
        public Direction: boolean;
    }
    export class BillingType {
        public Id: number;
        public Name: string;
    }
    export class Employee {
        message: string;
        firstName: string;
        lastName: string;
        location: string;
        locale: string;
        gender: string;
        pictureUrl: string;
        facebookId: number;
        patronymic: string;
        roleType: string;
        officeID: number;
    }
    export class Office {
        public Id: number;
        public Location: string;
        public Locale: string;
        public Adress: string;
        public Phone: string;
    }
    export class InsuranceCompany {
        public Id: number;
        public ShortName: string;
        public FullName: string;
        public Adress: string;
        public Phone: string;
        public Comment: string;
        public Region: number;
    }
    export class InsurancePolicy {
        public Id: number;
        public Series: string;
        public Number: string;
        public Status: string;
        public Company: InsuranceCompany;
        public ConclusionDate: Date;
        public StartDate: Date;
        public EndDate: Date;
        public Customer: Customer;
        public Auto: Auto;
        public Employee: Employee;
        public Office: Office;
        public IsChecked: boolean;
    }
    export class Customer {
        public Id: number;
        public Name: string;
        public LastName: string;
        public Patronymic: string;
        public Birthday: Date;
        public BirthAdress: string;
        public LivingAdress: string;
        public PaspNum: string;
        public PaspDateReceiving: Date;
        public PaspPlaceReceiving: string;
        public RegistrAdress: string;
        public DrivingLicNum: string;
        public DrivingLicDateReceiving: Date;
        public DrivingLicPlaceReceiving: string;
        public DrivingLicCat: string;
        public Office: Office;
        public Phone: string;
        public Email: string;
        public Notifications: boolean;
    }
    export class LegalEntity {
        public Id: number;
        public Name: string;
        public Representative: Customer;
        public Adress: string;
        public OGRN: string;
        public INN: string;
        public BIK: string;
        public CheckingAccount: string;
        public OwnerName: string;
    }
    export class Auto {
        public Id: number;
        public Brand: string;
        public Model: string;
        public GosNum: string;
        public YearOfManuf: string;
        public YearOfStartExplotation: string;
        public YearOfBodyManuf: string;
        public BodyNum: string;
        public EngineNum: string;
        public TechPaspNum: string;
        public TechPaspDateReceiving: Date;
        public RegCertNum: string;
        public RegCerDateReceiving: Date;
        public VIN: string;
        public Power: string;
        public Mileage: string;
        public ManufCountry: string;
        public Type: string;
        public Colour: string;
        public ColourType: string;
        public IndividualOwner: Customer;
        public LegalEntityOwner: LegalEntity;
    }
