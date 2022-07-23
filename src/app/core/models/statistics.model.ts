interface NameCountDto {
    name: string;
    count: number;
}

export class Statistics {
    count: number;
    views: number;
    inclusionGender: {
        male: number;
        female: number;
        both: number;
        null: number
    };
    recruitmentStatus: {
        recruiting: number;
        notRecruiting: number;
        authorised: number;
        notAvailable: number;
        null: number
    };
    inclusionAgeMin: {
        inPregnancy: number;
        under1Year: number;
        under10Years: number;
        under20Years: number;
        under30Years: number;
        under40Years: number;
        under50Years: number;
        over50Years: number;
        noLimit: number;
        null: number;
    };
    inclusionAgeMax: {
        inPregnancy: number;
        under1Year: number;
        under10Years: number;
        under20Years: number;
        under30Years: number;
        under40Years: number;
        under50Years: number;
        over50Years: number;
        noLimit: number;
        null: number;
    };
    phase: {
        phase0: number;
        phase1: number;
        phase2: number;
        phase3: number;
        phase4: number;
        notApplicable: number;
        other: number;
        null: number;
    };
    result: {
        with: number;
        without: number
    };
    sourceRegister: NameCountDto[];
    studyType: NameCountDto[];
    targetSize: NameCountDto[];

    constructor () {
        this.count = 0,
        this.views = 0,
        this.inclusionGender = {
            male:0,
            female:0,
            both:0,
            null: 0
        };
        this.recruitmentStatus = {
            recruiting:0,
            notRecruiting:0,
            authorised:0,
            notAvailable:0,
            null: 0
        };
        this.inclusionAgeMin = {
            inPregnancy:0,
            under1Year:0,
            under10Years:0,
            under20Years:0,
            under30Years:0,
            under40Years:0,
            under50Years:0,
            over50Years:0,
            noLimit:0,
            null:0,
        };
        this.inclusionAgeMax = {
            inPregnancy:0,
            under1Year:0,
            under10Years:0,
            under20Years:0,
            under30Years:0,
            under40Years:0,
            under50Years:0,
            over50Years:0,
            noLimit:0,
            null:0,
        };
        this.phase = {
            phase0:0,
            phase1:0,
            phase2:0,
            phase3:0,
            phase4:0,
            notApplicable:0,
            other:0,
            null:0,
        };
        this.result = {
            with: 0,
            without: 0
        };
        this.sourceRegister = [];
        this.studyType = [];
        this.targetSize = [];
    }
}
