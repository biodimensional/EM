import { Publication,Authors } from './publications';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

// var _iCCU="Institute of Cardiology, Catholic University of the Sacred Heart, Rome, Italy";
var _iCCU="iccu";
// var _iODC="Fondazione Toscana G. Monasterio, Ospedale Del Cuore, Massa, Italy";
var _iODC="iodc";

var EM={id:1,name:"Eros", surname:"Montin",affiliation:"nyu"};
var RL={id:2,name:"Riccardo", surname:"Lattanzi",affiliation:"nyu"};
var CC={id:3,name:"Christopher", surname:"Collins",affiliation:"nyu"};
var GC={id:4,name:"Giuseppe", surname:"Carluccio",affiliation:"nyu"};
var RoWi={id:4,name:"Roy", surname:"Wiggins",affiliation:"nyu"};
var ToBl={id:4,name:"Tobias", surname:"Block",affiliation:"nyu"};
var BeZh={id:4,name:"Bei", surname:"Zhang",affiliation:"nyu"};
var CeDe={id:4,name:"Cem Murat", surname:"Deniz",affiliation:"nyu"};
var SoGy={id:4,name:"Soterios", surname:"Gyftopoulos",affiliation:"nyu"};
var RiKi={id:4,name:"Richard", surname:"Kijowski",affiliation:"nyu"};
var TaRo={id:4,name:"Tatiane Cantarelli", surname:"Rodrigues",affiliation:"nyu"};
var ThYo={id:4,name:"Thomas", surname:"Youm",affiliation:"nyu"};
var DaPa={id:4,name:"Daniele", surname:"Panozzo",affiliation:"nyu"};
var MaMu={id:4,name:"Marco", surname:"Muccio",affiliation:"nyu"};
var YuGe={id:4,name:"Yulin", surname:"Ge",affiliation:"nyu"};




var Mle={id:4,name:"Marinella", surname:"Levi",affiliation:"poli"}
var OmAl={id:4,name:"Ombretta", surname:"Alessandro",affiliation:"int"}
var CCr={id:4,name:"Caterina", surname:"Credi",affiliation:"poli"}
var MaLe={id:4,name:"Mara", surname:"Lecchi",affiliation:"int"}
var AB={id:4,name:"Antonella", surname:"Belfatto",affiliation:"poli"};
var MB={id:4,name:"Marco", surname:"Bologna",affiliation:"poli"};
var SM={id:4,name:"Silvia", surname:"Meroni",affiliation:"int"};
var ClCa={id:4,name:"Claudia", surname:"Cavatorta",affiliation:"int"};
var EmPe={id:4,name:"Emilia", surname:"Pecori",affiliation:"int"};
var BaDi={id:4,name:"Barbara", surname:"Diletto",affiliation:"int"};
var MaMa={id:4,name:"Maura", surname:"Massimino",affiliation:"int"};
var MaO={id:4,name:"Maria Chiara", surname:"Oprandi",affiliation:"lnf"};
var GePo={id:4,name:"Geraldina", surname:"Poggi",affiliation:"lnf"};
var FA={id:4,name:"Filippo", surname:"Arrigoni",affiliation:"lnf"};
var DP={id:4,name:"Denis", surname:"Peruzzo",affiliation:"lnf"};
var EmPi={id:4,name:"Emanuele", surname:"Pignoli",affiliation:"int"};
var LG={id:4,name:"Lorenza", surname:"Gandola",affiliation:"int"};
var PC={id:4,name:"Pietro", surname:"Cerveri",affiliation:"poli"};
var LM={id:4,name:"Luca", surname:"Mainardi",affiliation:"poli"};
var VaCo={id:4,name:"Valentina", surname:"Corino",affiliation:"poli"};
var KaPa={id:4,name:"Katia", surname:"Passera",affiliation:"poli"};
var DzSe={id:4,name:"Dzemila", surname:"Sero",affiliation:"poli"};
var PP={id:4,name:"Paolo", surname:"Potepan",affiliation:"int"};


var LuBr={id:4,name:"Luca", surname:"Brambilla",affiliation:"int"};
var DaVe={id:4,name:"Daniele", surname:"Vergnaghi",affiliation:"int"};
var RGr={id:4,name:"R", surname:"Granata",affiliation:"int"};
var ECi={id:4,name:"E", surname:"Civelli",affiliation:"int"};
var AGi={id:4,name:"A", surname:"Gianluca",affiliation:"int"};

var SiCe={id:4,name:"Simona", surname:"Celi",affiliation:_iODC};


var MLe={id:4,name:"M", surname:"Lecchi",affiliation:"int"};
var FrSp= {id:4,name:"F", surname:"Spreafico",affiliation:"int"};
var ElSc= {id:4,name:"E", surname:"Schiavello",affiliation:"int"};
var PaVe = {id:4,name:"Paolo", surname:"Verderio",affiliation:"int"};
var VBi = {id:4,name:"V", surname:"Biassoni",affiliation:"int"};

var RaRa={id:4,name:"Rajiv", surname:"Rampat",affiliation:"poli"};
var RoFe={id:4,name:"Roberto", surname:"Fedele",affiliation:_iCCU};



var GiCa={id:4,name:"Giuseppina", surname:"Calareso",affiliation:"int"};
var CaRe={id:4,name:"Carlo", surname:"Resteghini",affiliation:"int"};
var SiSd={id:4,name:"Silvana", surname:"Sdao",affiliation:"int"};
var LL={id:4,name:"Lisa", surname:"Licitra",affiliation:"int"};
var LaLo={id:4,name:"Laura", surname:"Locati",affiliation:"int"};
var PaBo={id:4,name:"Paolo", surname:"Bossi",affiliation:"int"};



var SuMi={id:4,name:"Susanna", surname:"Migliori",affiliation:"poli"};
var ClCh={id:4,name:"Claudio", surname:"Chiastra",affiliation:"poli"};
var FM={id:4,name:"Francesco", surname:"Migliavacca",affiliation:"poli"};
var GaDu={id:4,name:"Gabriele", surname:"Dubini",affiliation:"poli"};
var LoGe={id:4,name:"Lorenzo", surname:"Genuardi",affiliation:"poli"};



var StBo={id:4,name:"Stefano", surname:"Bonacina",affiliation:"poli"};
var YlPr={id:4,name:"Ylenia", surname:"Privitera",affiliation:"poli"};
var SeMa={id:4,name:"Serena", surname:"Marsilio",affiliation:"poli"};
var FePa={id:4,name:"Federica", surname:"Passarelli",affiliation:"poli"};
var MaMas={id:4,name:"Marco", surname:"Masseroli",affiliation:"poli"};
var FrPi={id:4,name:"Francesco", surname:"Pinciroli",affiliation:"poli"};

var FaVe={id:4,name:"Fabio", surname:"Veronese",affiliation:"poli"};

var CrAu={id:4,name:"Cristina", surname:"Aurigemma",affiliation:_iCCU};
var FrBu={id:4,name:"Francesco", surname:"Burzotta",affiliation:_iCCU};
var DaSm={id:4,name:"David", surname:"Hildick-Smith",affiliation:"br"};
var JaCo={id:4,name:"James", surname:"Cockburn",affiliation:"br"};


var AnMe={id:4,name:"Antonella", surname:"Messina",affiliation:"int"};
var FrGr={id:4,name:"Francesca G.", surname:"Greco",affiliation:"int"};

var PaCa={id:4,name:"Paolo", surname:"Casali",affiliation:"int"}
var AlGr={id:4,name:"Alessandro", surname:"Gronchi",affiliation:"int"}
var AlMa={id:4,name:"Alessandro", surname:"Marchianò",affiliation:"int"}


var FrSp={id:4,name:"Francesco", surname:"Spina",affiliation:"int"}
var AlLa={id:4,name:"Alberto", surname:"Laffranchi",affiliation:"int"}
var GiTr={id:4,name:"Giovanna", surname:"Trecate",affiliation:"int"}
var ViMo={id:4,name:"Vittorio", surname:"Montefusco",affiliation:"int"}
var PaPa={id:4,name:"Paolo", surname:"Panizza",affiliation:"int"}
var LuMa={id:4,name:"Luigi", surname:"Mariani",affiliation:"int"}
var PaCo={id:4,name:"Paolo", surname:"Corradini",affiliation:"int"}


var ElCu={id:4,name:"Elena", surname:"Cutrì",affiliation:"poli"}
var GrSp={id:4,name:"Grazia", surname:"Spatafora",affiliation:"poli"}
var GaFr={id:4,name:"Gaia", surname:"Franzetti",affiliation:"int"}
var FeCr={id:4,name:"Federica", surname:"Crippa",affiliation:"int"}
var GiSp={id:4,name:"Giuseppe", surname:"Spadola",affiliation:"ieo"}
var AlTe={id:4,name:"Alessandro", surname:"Testori",affiliation:"ieo"}
var GiPe={id:4,name:"Giancarlo", surname:"Pennati",affiliation:"poli"}

var MaTa={id:4,name:"Maria Gabriella", surname:"Tana",affiliation:"poli"}
var SeCe={id:4,name:"Sergio", surname:"Cerutti",affiliation:"poli"}
var AnBi={id:4,name:"Anna Maria", surname:"Bianchi",affiliation:"poli"}


var IoGe={id:5,name:"Ioannis", surname:"Georgakis",affiliation:"nyu"}


var AnAn={id:5,name:"Anna", surname:"Anzani",affiliation:"asst"}
var ElRa={id:5,name:"Elisa", surname:"Ravizzotti",affiliation:"ge"}

var DaRi={ id:5,name:"Daniele", surname:"Riccio",affiliation:"nyu"};
var GiRu={id:5,name:"Giuseppe", surname:"Ruello",affiliation:"f2"};


var KaLo={id:5,name:"Kartik", surname:"Logishetty",affiliation:"ox"};
var  SrNa={id:5,name:"Srikar", surname:"Namireddy",affiliation:"ox"};
var HaSuPo={id:5,name:"Hariharan Subbiah", surname:"Ponniah",affiliation:"ox"};
var SiGlJo={id:5,name:"Sion", surname:"Glin-Jones",affiliation:"ox"};



var AnAr={id:5,name:"Anais", surname:"Artiges",affiliation:"poli"};
var ImKh={id:5,name:"Iman", surname:"Khodarahmi",affiliation:"ox"};


var AnVa={id:5,name:"Andrea", surname:"Vanvulli",affiliation:"int"};
var LuViSc={id:5,name:"Lucilla Violetta", surname:"Sciacqua",affiliation:"int"};
var FiPa={id:5,name:"Filippo", surname:"Patti",affiliation:"int"};
var RoDr={id:5,name:"Roza", surname:"Drebot",affiliation:"int"};
var LaanMaLo={id:5,name:"Laura Anna Maria", surname:"Lozza",affiliation:"int"};
var SeVi={id:5,name:"Sergio", surname:"Villa",affiliation:"int"};
var DaSc={id:5,name:"Davide", surname:"Scaramuzza",affiliation:"int"};


var _tmri="mri";
var _tct="ct";
var _toct="oct";
var _trdm="radiomic"
var _tismrm="ismrm";
var _tdwi="dwi";
var _tdti="dti";
var _tsimulation="simulation";
var _tcsd="csd";
var _tcad="cad";
var _tcardio="cardionvascularimaging";
var _tem="electromagnetic fields";
var _tir="Image Registration";
var _tis="Image Segmentation";
var _tped="Pediatric";
var _tbrain="Brain";
var _tneuro="Neuro";
var _toncology="oncology";
var _ttretresp="treatmentresponse";
var _thn="H&N";
var _tsnr="SNR";
var _tpmr="Pseudo Multiple Replicas";
var _tsarcomas="Soft Tissues Sarcomas";
var _trecist="RECIST";
var _tfeatureselection="featuresselection";
var _tml="Machine Learning";
var _tcloud="cloud Computing";
var _twebapp="webgui";
var _tstaging ="staging";
var _tradiotherapy ="radiotherapy";
var _tradiomic ="radiomic";
var _tfai="Femoroacetabular Impingement"
var _tdl="Deep Learning"
var _tms="Multiple Sclerosis"
var _tsar="SAR Analysis"
var _tsafety="MRI Safety"

var IMG="http://biodimensional.com/RESOURCES/img/";
var DOC="http://biodimensional.com/RESOURCES/doc/";



var ISMRM23 = "31th Scientific Meeting of the International Society for Magnetic Resonance in Medicine (ISMRM). ON, Canada 03-08 June 2023";
var ISMRM25 = "33th Scientific Meeting of the International Society for Magnetic Resonance in Medicine (ISMRM). Honolulu 06-16 May 2025";

export const PUBLICATIONS: Publication[] = [
  {
    id: -29,
    title: "Radiomics for Precision Diagnosis of FAI: How Close Are We to Clinical Translation? A Multi-Center Validation of a Single-Center Trained Model",
    abstract:
      "Background: Femoroacetabular impingement (FAI) is a complex hip disorder characterized by abnormal contact between the femoral head and acetabulum, often leading to joint damage, chronic pain, and early-onset osteoarthritis. Despite MRI being the imaging modality of choice, diagnosis remains challenging due to subjective interpretation, lack of standardized imaging criteria, and difficulty differentiating symptomatic from asymptomatic cases. This study aimed to develop and externally validate radiomics-based machine learning (ML) models capable of classifying healthy, asymptomatic, and symptomatic FAI cases with high diagnostic accuracy and generalizability. Methods: A total of 82 hip MRI datasets (31 symptomatic, 31 asymptomatic, 20 healthy) from a single center were used for training and cross-validation. Radiomic features were extracted from four segmented anatomical regions (femur, acetabulum, gluteus medius, gluteus maximus). A four-step feature selection pipeline was implemented, followed by training 16 ML classifiers. External validation was conducted on a separate multi-center cohort of 185 symptomatic FAI cases acquired with heterogeneous MRI protocols. Results: The best-performing models achieved a cross-validation accuracy of up to 90.9% in distinguishing among healthy, asymptomatic, and symptomatic hips. External validation on the independent multi-center cohort demonstrated 100% accuracy in identifying symptomatic FAI cases. Since this metric reflects performance on symptomatic cases only, it should be interpreted as a detection rate (true positive rate) rather than overall multi-class accuracy. Gini index-based feature selection consistently outperformed F-statistic-based methods across all the models. Conclusions: This is the first study to systematically integrate radiomics and multiple ML models for FAI classification for these three phenotypes, trained on a single-center dataset and externally validated on multi-institutional MRI data. The demonstrated robustness and generalizability of radiomic features support their use in clinical workflows and future large-scale studies targeting standardized, data-driven FAI diagnosis.",  
      authors: [EM, KaLo, HaSuPo,SrNa, ImKh,SiGlJo,RL],
    journal:"Journal Of Clinical Medicine",
    date: "2025",
    link: "https://www.mdpi.com/2077-0383/14/12/4042",
    type: "article",
    tags: [_tmri, _tradiomic, _tml, _tfeatureselection, _tfai, _tstaging],
    image:
      "assets/dalle/-29.png",
    download: null,
    DOI: "10.3390/jcm14124042"
  },
  {
    id: -28,
    title: "Radiomics to predict tumor response to combination chemoradiotherapy in squamous cell carcinoma of the anal canal: a preliminary investigation",
    abstract:
      "Deep learning networks have shown promising results in estimating electric fields from B1 maps. Some recent studies have shown that 2D analytical solutions can quickly generate data to be used as potential data augmentation with numerically simulated data. Since the ultimate goal is to have the developed deep learning networks able to operate with experimentally acquired data which might be affected by noise, in this study we have developed and tested the ability of these 2D networks to accurately predict the electric fields from noisy B1 maps. The networks could predict well the electric fields also in presence of noise, with a maximum NRMSE of 13.6%.",  
      authors: [AnVa, LuViSc, FiPa, EM,RL, RoDr, LaanMaLo, SeVi, DaSc],
    journal:"European Radiology Experimental",
    date: "2025",
    link: "https://eurradiolexp.springeropen.com/articles/10.1186/s41747-025-00559-0",
    type: "article",
    tags: [_tmri, _tradiomic, _tml, _tfeatureselection, _toncology, _tstaging],
    image:
      "assets/dalle/-28.png",
    download: null,
    DOI: "10.1186/s41747-025-00559-0"
  },
  {
    id: -27,
    title: "Deep Learning Networks to Estimate Electric Fields From Noisy B1 Maps",
    abstract:
      "Deep learning networks have shown promising results in estimating electric fields from B1 maps. Some recent studies have shown that 2D analytical solutions can quickly generate data to be used as potential data augmentation with numerically simulated data. Since the ultimate goal is to have the developed deep learning networks able to operate with experimentally acquired data which might be affected by noise, in this study we have developed and tested the ability of these 2D networks to accurately predict the electric fields from noisy B1 maps. The networks could predict well the electric fields also in presence of noise, with a maximum NRMSE of 13.6%.",  
      authors: [EM, GC, CC, RL,DaRi,GiRu],
    journal:"2025 United States National Committee of URSI National Radio Science Meeting (USNC-URSI NRSM)",
    date: "2025",
    link: "https://ieeexplore.ieee.org/iel8/10906696/10906700/10907031.pdf",
    type: "conference",
    tags: [_tmri, _tfai, _tradiomic, _tml, _tfeatureselection],
    image:
      "assets/dalle/-27.png",
    download: "https://ieeexplore.ieee.org/iel8/10906696/10906700/10907031.pdf",
    DOI: "10.23919/USNC-URSINRSM66067.2025.10907031"
  }, 
  {
    id: -26,
    title: "Oral Preentation: Fully Automated Radiomic Analysis to Differentiate Pain Profiles in Femoroacetabular Impingement: A Robust MRI-Based Model",
    abstract:
      "Motivation: This study aims to enhance MRI-based differentiation of pain profiles in femoroacetabular impingement (FAI) for improved treatment planning. Goal(s): Develop a robust radiomic model to distinguish symptomatic, asymptomatic, and healthy hips in FAI patients. Approach: We used MRI data from three cohorts, including an external validation set of over 185 independently acquired patients, with automated segmentation, radiomic feature extraction, and machine learning to classify hip states. Results: The model achieved >85% accuracy, with some classifiers reaching 100%, demonstrating reliability and generalizability across varied imaging protocols and independently acquired data. Impact This fully automated, reliable model allows clinicians to accurately differentiate pain profiles in FAI patients across diverse imaging protocols, enhancing personalized treatment strategies. It paves the way for broader clinical adoption of MRI-based radiomics for musculoskeletal disorders, supporting efficient, reproducible diagnostics. ",  
      authors: [EM, KaLo, HaSuPo,SrNa, ImKh,SiGlJo,RL],
    journal: ISMRM25 + "(TBD)",
    date: "2025",
    link: "",
    type: "conference",
    tags: [_tmri, _tfai, _tradiomic, _tml, _tfeatureselection],
    image:
      "assets/dalle/-26.png",
    download: undefined,
    DOI: null
  }, 
  {
    id: -25,
    title: "Power Pitch: A Modular End-to-End Open-Source Software Pipeline to Simulate the Entire MRI Experiment",
    abstract:
      "Synopsys Motivation: Tto democratize magnetic resonance (MR) imaging research by developing an open-source software simulation platform where researchers can test new technology, and radiologists can optimize clinical protocols without operating an actual MR scanner. Goal: To demonstrate the first comprehensive pipeline to simulate all stages of MR imaging experiments, from coil modeling to spin excitation and image reconstruction. Approach: Six open-source stand-alone software modules, implemented in various programming languages, were interconnected to simulate MR experiments using three head coils. Results: Realistic T1-weighted and T2-weighted brain MR images were successfully generated from the synthetic MR signal produced by a simulated spin-echo sequence. Impact The comprehensive cloud-compatible simulation pipeline will make MR research freely accessible via the internet. By enabling virtual experiments, this tool will allow users to generate synthetic data to train neural networks, and will constitute a valuable tool for education and training. ",    authors: [EM, GC, CC, RL],
    journal: ISMRM25 + "(TBD)",
    date: "2025",
    link: "",
    type: "conference",
    tags: [_tmri, _tsimulation, _tir, _tis, _tsafety, _tsar],
    image:
      "assets/dalle/-25.png",
    download: undefined,
    DOI: null
  },
  {
    id: -24.1,
    title: "Comparison of mtrk, Pulseq, and vendor sequences using simulated, phantom, and in-vivo acquisitions",
    abstract:
      "This work leverages a human-readable sequence description language and a web-based graphical interface, allowing users to create sequences as time diagrams through an intuitive drag-and-drop system. These sequences can be directly used at the scanner with the mtrk driver sequence or converted to Pulseq for wider compatibility. In this abstract, we developed a pulse sequence using mtrk and compared it to its conversion to Pulseq and an equivalent product sequence. ",  
      authors: [AnAr,ToBl,EM, RL],
    journal: ISMRM25 + "(TBD)",
    date: "2025",
    link: "",
    type: "conference",
    tags: [_tmri, _tfai, _tradiomic, _tml, _tfeatureselection],
    image:"assets/dalle/-24.1.png",
    download: undefined,
    DOI: null
  }, 
  {
    id: -24,
    title: "Editorial for “Diagnosis of Sacroiliitis Through Semi-Supervised Segmentation and Radiomics Feature Analysis of MRI Images.",
    abstract:
      "Sacroiliitis, a defining feature of ankylosing spondylitis (AS), is a significant contributor to chronic lower back pain and remains challenging to diagnose due to overlapping symptoms with other conditions. Accurate and early detection of sacroiliitis is critical for timely therapeutic interventions and improved patient outcomes. This issue of the Journal of Magnetic Resonance Imaging features1 presents a cutting-edge diagnostic framework integrating semi-supervised segmentation with radiomics analysis, addressing key challenges in the diagnosis of sacroiliitis. Magnetic resonance imaging (MRI) is the gold standard for sacroiliitis detection, particularly for identifying inflammatory lesions such as bone marrow edema (BME).2, 3 Its ability to visualize subchondral bone marrow and structural abnormalities makes it indispensable for accurate diagnosis. However, widespread clinical adoption of automatic solutions for the diagnosis is hindered by the labor-intensive nature of manual segmentation and the need for large annotated datasets to train machine learning (ML) models.4 The framework proposed by Zhong et al1 leverages the Unimatch semi-supervised segmentation method, achieving a Dice coefficient of 0.859, thus significantly reducing reliance on extensive labeled datasets. This innovation enhances accessibility to AI-driven diagnostics, particularly in resource-limited settings. A key strength of the study lies in its integration of segmentation with radiomics feature extraction from T1-weighted imaging (T1WI) and short tau inversion recovery (STIR) sequences. Radiomics has demonstrated immense potential in revealing complex imaging patterns for disease diagnosis and personalized treatment.5, 6 In this scenario, the authors highlight the clinical relevance of radiomics features, such as GLCM Correlation and Entropy, to distinguish between structural and inflammatory changes. These features when used for training a support vector machines (SVMs) was able to achieve an areas under the receiver operating characteristic curve (AUC) of 0.86 for sacroiliitis detection and 0.76 for BME detection. These results align with other radiomics-based advancements, such as Liu et al's interpretable features and multi-task learning framework, which demonstrated similar diagnostic precision.7, 8 Moreover, the study incorporates explainable AI (XAI) techniques, specifically Shapley Additive Explanations (SHAP), to elucidate the contributions of individual radiomics features. This emphasis on interpretability enhances clinical trust and usability, bridging the gap between complex algorithms and practical application. While the results are promising, the reliance on a single-center dataset highlights the need for validation across diverse patient populations and institutions. Future research could explore the incorporation of complementary imaging modalities, such as PET-MRI, to further improve diagnostic accuracy and expand the applicability of the framework. By addressing challenges in data availability and interpretability, the framework introduced by the authors1 represents a significant advancement in sacroiliitis diagnosis. By combining radiomics with explainable AI methodologies, this approach offers the potential for more reliable and accessible diagnostic tools. This aligns with recent advancements in musculoskeletal imaging, where AI is increasingly used to enhance diagnostic precision and reduce reliance on manual interpretation, ultimately improving the early detection and treatment outcomes for patients with sacroiliitis.",
    authors: [EM],
    journal: "JMRI",
    date: "2025",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/jmri.29732",
    type: "article",
    tags: ["mri", _tradiomic, _tml, _tfeatureselection],
    // image: "https://onlinelibrary.wiley.com/cms/asset/eccc9ac9-53e8-48f8-9c85-ff424fde06e8/jmri29731-fig-0003-m.jpg",
    image: "assets/dalle/-24.png",
    download: null,
    DOI: "10.1002/jmri.29732"
  },
  {
    id: -23,
    title: "A Serverless Implementation of a Tool for Temperature and SAR Estimation (TESS 2.0)",
    abstract:
      "Temperature Estimation from SAR Simulation (TESS) stands as a Cloud-based tool specifically designed for evaluating the safety aspects of MRI examinations. It utilizes a customized version of the bioheat equation, incorporating factors like the temporal changes in body temperature and various physiological parameters in its numerical solutions. Here we present TESS 2.0, with new functionalities and a more user-friendly interface. Notably, the computations occur in a serverless manner, utilizing AWS to enhance efficiency and accessibility.",
    authors: [EM, GC, CC, RL],
    journal: "2024 E-Health and Bioengineering Conference (EHB)",
    date: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10805647",
    type: "article",
    tags: ["mri", "cloud"],
    image: "assets/dalle/-23.png",
    download: null,
    DOI: null
  },
  {
    id: -22,
    title: "Radiomics features outperform standard radiological measurements in detecting femoroacetabular impingement on three-dimensional magnetic resonance imaging.",
    abstract:
      "Femoroacetabular impingement (FAI) is a cause of hip pain and can lead to hip osteoarthritis. Radiological measurements obtained from radiographs or magnetic resonance imaging (MRI) are normally used for FAI diagnosis, but they require time-consuming manual interaction, which limits accuracy and reproducibility. This study compares standard radiologic measurements against radiomics features automatically extracted from MRI for the identification of FAI patients versus healthy subjects. Three-dimensional Dixon MRI of the pelvis were retrospectively collected for 10 patients with confirmed FAI and acquired for 10 healthy subjects. The femur and acetabulum were segmented bilaterally and associated radiomics features were extracted from the four MRI contrasts of the Dixon sequence (water-only, fat-only, in-phase, and out-of-phase). A radiologist collected 21 radiological measurements typically used in FAI. The Gini importance was used to define 9 subsets with the most predictive radiomics features and one subset for the most diagnostically relevant radiological measurements. For each subset, 100 Random Forest machine learning models were trained with different data splits and fivefold cross-validation to classify healthy subjects versus FAI patients. The average performance among the 100 models was computed for each subset and compared against the performance of the radiological measurements. One model trained using the radiomics features datasets yielded 100% accuracy in the detection of FAI, whereas all other radiomics features exceeded 80% accuracy. Radiological measurements yielded 74% accuracy, consistent with previous work. The results of this preliminary work highlight for the first time the potential of radiomics for fully automated FAI diagnosis.",
    authors: [EM, RiKi, ThYo, RL],
    journal: "Journal of Orthopaedic Research",
    date: "2024",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1002/jor.25952",
    type: "article",
    tags: ["radiomics", "mri", "fai", "cloud"],
    image: "assets/dalle/-22.png",
    download: "https://onlinelibrary.wiley.com/doi/epdf/10.1002/jor.25952",
    DOI: "10.1002/jor.25952"
  },
  {
    id: -21,
    title: "Impact of the Complexity of the Geometry in an Analytical Solution Used to Train a Deep Learning Network",
    abstract:
      "Analytical solutions can be used to generate data to train Deep Learning neural networks to estimate electromagnetic fields. In this work, we compare the efficacy of two neural networks when two 2D analytical solutions are used to generate the training data: a geometry with 2 concentric infinitely long cylinders, and a geometry with up to 8 concentric infinitely long cylinders. The neural networks can estimate the electric fields and are trained with B1+ and SNR maps. The validation process was performed with results obtained with 3D numerical simulations. Even if more layers should provide higher heterogeneity in the training process, no significant improvement has been achieved with training with more layers, suggesting that it might be necessary to generate more data for better training with more heterogeneous geometries.",
    authors: [GC, EM, RL, CC],
    journal: "2023 IEEE EMBS Special Topic Conference on Data Science and Engineering in Healthcare, Medicine and Biology",
    date: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10404125",
    type: "conference",
    tags: ["deep learning", "mri", "cloud"],
    image: "assets/dalle/-21.png",
    download: null,
    DOI: null
  },
  {
    id: -20,
    title: "The impact of data augmentation and transfer learning on the performance of deep learning models for the segmentation of the hip on 3D magnetic resonance images",
    abstract:
      "Different pathologies of the hip are characterized by the abnormal shape of the bony structures of the joint, namely the femur and the acetabulum. Three-dimensional (3D) models of the hip can be used for diagnosis, biomechanical simulation, and planning of surgical treatments. These models can be generated by building 3D surfaces of the joint's structures segmented on magnetic resonance (MR) images. Deep learning can avoid time-consuming manual segmentations, but its performance depends on the amount and quality of the available training data. Data augmentation and transfer learning are two approaches used when there is only a limited number of datasets. In particular, data augmentation can be used to artificially increase the size and diversity of the training datasets, whereas transfer learning can be used to build the desired model on top of a model previously trained with similar data. This study investigates the effect of data augmentation and transfer learning on the performance of deep learning for the automatic segmentation of the femur and acetabulum on 3D MR images of patients diagnosed with femoroacetabular impingement. Transfer learning was applied starting from a model trained for the segmentation of the bony structures of the shoulder joint, which bears some resemblance to the hip joint. Our results suggest that data augmentation is more effective than transfer learning, yielding a Dice similarity coefficient compared to ground-truth manual segmentations of 0.84 and 0.89 for the acetabulum and femur, respectively, whereas the Dice coefficient was 0.78 and 0.88 for the model based on transfer learning. The Accuracy for the two anatomical regions was 0.95 and 0.97 when using data augmentation, and 0.87 and 0.96 when using transfer learning. Data augmentation can improve the performance of deep learning models by increasing the diversity of the training dataset and making the models more robust to noise and variations in image quality. The proposed segmentation model could be combined with radiomic analysis for the automatic evaluation of hip pathologies.",
    authors: [EM, CeDe, RiKi, ThYo, RL],
    journal: "Informatics in Medicine Unlocked",
    date: "2024",
    link: "https://www.sciencedirect.com/science/article/pii/S2352914823002903#fig5",
    type: "article",
    tags: ["deep learning", "mri", "fai", "cloud"],
    image: "assets/dalle/-20.png",
    download:
      "https://www.sciencedirect.com/science/article/pii/S2352914823002903/pdfft?md5=abcbc7caad8856414e021c946ab6d3f4&pid=1-s2.0-S2352914823002903-main.pdf",
    DOI: null
  },
  {
    id: -19,
    title: "A radiomics approach to the diagnosis of femoroacetabular impingement",
    abstract:
      "Introduction: Femoroacetabular Impingement (FAI) is a hip pathology characterized by impingement of the femoral head-neck junction against the acetabular rim, due to abnormalities in bone morphology. FAI is normally diagnosed by manual evaluation of morphologic features on magnetic resonance imaging (MRI). In this study, we assess, for the first time, the feasibility of using radiomics to detect FAI by automatically extracting quantitative features from images. Material and methods: 17 patients diagnosed with monolateral FAI underwent pre-surgical MR imaging, including a 3D Dixon sequence of the pelvis. An expert radiologist drew regions of interest on the water-only Dixon images outlining femur and acetabulum in both impingement (IJ) and healthy joints (HJ). 182 radiomic features were extracted for each hip. The dataset numerosity was increased by 60 times with an ad-hoc data augmentation tool. Features were subdivided by type and region in 24 subsets. For each, a univariate ANOVA F-value analysis was applied to find the 5 features most correlated with IJ based on p-value, for a total of 48 subsets. For each subset, a K-nearest neighbor model was trained to differentiate between IJ and HJ using the values of the radiomic features in the subset as input. The training was repeated 100 times, randomly subdividing the data with 75%/25% training/testing. Results: The texture-based gray level features yielded the highest prediction max accuracy (0.972) with the smallest subset of features. This suggests that the gray image values are more homogeneously distributed in the HJ in comparison to IJ, which could be due to stress-related inflammation resulting from impingement. Conclusions: We showed that radiomics can automatically distinguish IJ from HJ using water-only Dixon MRI. To our knowledge, this is the first application of radiomics for FAI diagnosis. We reported an accuracy greater than 97%, which is higher than the 90% accuracy for detecting FAI reported for standard diagnostic tests (90%). Our proposed radiomic analysis could be combined with methods for automated joint segmentation to rapidly identify patients with FAI, avoiding time-consuming radiological measurements of bone morphology.",
    authors: [EM, RiKi, ThYo, RL],
    journal: "Frontiers In Radiology - Artificial Intelligence In Radiology",
    date: "2023",
    link: "https://pubmed.ncbi.nlm.nih.gov/37492381/",
    type: "article",
    tags: ["radiomics", "mri", "fai", "cloud"],
    image: "assets/dalle/-19.png",
    download: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10365279/pdf/fradi-03-1151258.pdf",
    DOI: null
  },
  {
    id: -18,
    title: "A Web-Accessible Tool for 2D Analytical Solutions of Electromagnetic Fields in Concentric Cylinders",
    abstract:
      "In this work we present a web-accessible tool that provides a bidimensional analytical solution of the electric and magnetic fields generated by an infinitely long conducting wire, and scattered by two concentric infinitely long cylinders. The application will be available on the portal Cloud MR where it can be connected to other applications to estimate the impact of the electromagnetic field distribution on images and patient heating for magnetic resonance imaging (MRI) experiments.",
    authors: [GC, EM, CC, RL],
    journal: "2023 International Conference on Electromagnetics in Advanced Applications (ICEAA)",
    date: "2023",
    link: "https://ieeexplore.ieee.org/abstract/document/10297760",
    type: "conference",
    tags: [_tmri, _tsimulation, _tir, _tis, _tsafety, _tsar],
    image: "assets/dalle/-18.png",
    download: undefined,
    DOI: null
  },
  {
    id: -17,
    title: "A deep learning model for the estimation of RF field trained from an analytical solution",
    abstract:
      "In the article we describe a neural network able to estimate the electric field from SNR and B1+ maps. The network was trained using the images obtained from a 2D analytical solution of an infinitely long circular cylinder excited by a conductive wire. The predicted images are in good agreement with the targets with a maximum mean square error of 0.28%. The performance of the network was also tested on a human body model with an error of 13.96%. These preliminary results are very promising and open the possibility to use the network on numerically simulated and experimentally acquired images.",
    authors: [EM, GC, CC, RL],
    journal:
      "IEEE International Symposium on Antennas and Propagation and USNC-URSI Radio Science Meeting, July 23–28, 2023 • Portland, Oregon, USA",
    date: "2022",
    link: "https://ieeexplore.ieee.org/abstract/document/10289426",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-17.png",
    download: undefined,
    DOI: null
  },
  {
    id: -16,
    title: "Power Pitch: Tuning And Validation Of An Image Registration Procedure For Patient-Specific SAR Simulation",
    abstract:
      "In this study, we applied imaged-based radiomic techniques to phase contrast (PC) MRI images to distinguish the blood flow through the neck-feeding arteries of healthy controls (HC) from MS patients. By applying a simple machine learning model, k nearest neighbor, we found that first order features of the arteries’ regions of interest (ROI), drawn on phase images, reported the best accuracy (0.80) in labeling MS patients and HCs. PC-MRI is a fast and reliable imaging technique that, in conjunction with radiomics, offers great clinical potential to further quantify the diagnosis of MS, currently relying on qualitative approaches.",
    authors: [EM, GC, CC, RL],
    journal: ISMRM23 + "(0610)",
    date: "2023",
    link: "In this article, we build an automatic pipeline for patient-specific assessment of SAR. Given a target MR image and an atlas comprising a reference image and a model, an MR-shaped model can be obtained by registering the AIM with the target MR and applying the resulting displacement fields to the corresponding ABM. The results of the analysis of simulated data showed that the proposed automatic pipeline was reliable and accurate both in terms of SAR distribution and the similarity of the patient-specific models.",
    type: "conference",
    tags: [_tmri, _tsimulation, _tir, _tis, _tsafety, _tsar],
    image:
      "assets/dalle/-16.png",
    download: undefined,
    DOI: null
  },
  {
    id: -15,
    title: "Radiomics Applied To Phase Contrast MRI Images Successfully Distinguishes Healthy Subjects And Multiple Sclerosis Patients",
    abstract:
      "In this study, we applied imaged-based radiomic techniques to phase contrast (PC) MRI images to distinguish the blood flow through the neck-feeding arteries of healthy controls (HC) from MS patients. By applying a simple machine learning model, k nearest neighbor, we found that first order features of the arteries’ regions of interest (ROI), drawn on phase images, reported the best accuracy (0.80) in labeling MS patients and HCs. PC-MRI is a fast and reliable imaging technique that, in conjunction with radiomics, offers great clinical potential to further quantify the diagnosis of MS, currently relying on qualitative approaches.",
    authors: [EM, MaMu, YuGe, RL],
    journal: ISMRM23 + "(2426)",
    date: "2023",
    link: "https://submissions.mirasmart.com/ISMRM2023/Itinerary/PresentationDetail.aspx?evdid=6938",
    type: "conference",
    tags: [_tmri, _tradiomic, _tml, _tfeatureselection, _tneuro, _tms],
    image:
      "assets/dalle/-15.png",
    download: undefined,
    DOI: null
  },
  {
    id: -14,
    title: "A Neural Network To Estimate The Hip Center Of Rotation For A Fully-Automated Range Of Motion Analysis In Femoroacetabular Impingement.",
    abstract:
      "We evaluated three neural network architectures for the automatic identification of the center of the femur head on 3D water-only Dixon MRI. We trained using a mixture of real and augmented data. The mean error of the best-performing network was three-time lower compared to a manual annotation and on the order of 1 voxel. We combined the network to create the first fully automated pipeline to assess the hip range of motion from 3D MR.",
    authors: [EM, DaPa, RL],
    journal: ISMRM23 + "(4743)",
    date: "2023",
    link: "https://submissions.mirasmart.com/ISMRM2023/Itinerary/PresentationDetail.aspx?evdid=3994",
    type: "conference",
    tags: [_tmri, _tsimulation, _tdl, _tml, _tfai],
    image:
      "assets/dalle/-14.png",
    download: undefined,
    DOI: null
  },
  {
    id: -13,
    title: "A Radiomic Approach To The Diagnosis Of Femoroacetabular Impingement",
    abstract:
      "The results of this study showed that radiomics can automatically distinguish a healthy joint from one with impingement using water-only Dixon MRI. To our knowledge, this is the first application of radiomics for FAI diagnosis. Our radiomic analysis achieved an accuracy greater than 97%, which is higher than the 90% accuracy for detecting FAI reported for standard diagnostic tests (90%). Combining our proposed radiomic analysis with methods for automated joint segmentation could be used to rapidly identify patients with FAI, avoiding time-consuming radiological measurements of bone morphology.",
    authors: [EM, RiKi, RL],
    journal: ISMRM23 + "(2890)",
    date: "2023",
    link: "https://submissions.mirasmart.com/ISMRM2023/Itinerary/PresentationDetail.aspx?evdid=1237",
    type: "conference",
    tags: [_tmri, _tradiomic, _tml, _tfeatureselection, _tfai],
    image:
      "assets/dalle/13.png",
    download: undefined,
    DOI: null
  },
  {
    id: -12,
    title: "Rado - A Cloud-Based Toolbox For Radiomics Analysis",
    abstract:
      "Rado is a web-based application designed to fully automatically perform a radiomic analysis. Rado allows users to extract features from medical images, apply feature selections, and mine the dataset using the most common classifiers and regressors. It also offers the option to augment the dataset by means of rigid transformations. The current version of Rado allows users to interact with the dataset by means of restful APIs or using a standardized web GUI. The application will be distributed via the Cloud MR portal, which allows running the feature extraction on sparse servers as well as on local computers.",
    authors: [EM, RL],
    journal: ISMRM23 + "(2889)",
    date: "2023",
    link: "https://submissions.mirasmart.com/ISMRM2023/Itinerary/PresentationDetail.aspx?evdid=5682",
    type: "conference",
    tags: [_tmri, _tradiomic, _tml, _tfeatureselection],
    image: "assets/dalle/-12.png",      
    download: undefined,
    DOI: null
  },
  {
    id: -12.1,
    title: "SAR And Temperature Safety Assessment On Patient Specific Models Generated With A Registration Method",
    abstract:
      "Patient specific models are required to improve the accuracy of the simulations to perform safety assessment related to interaction of the RF fields with the body tissues. One registration method allows non-rigid transformations: this can be used to reshape a numerical body model to match the images of a patient, and generate a model similar to the shape of the patient. We performed SAR and temperature simulations to evaluate the ability of the registered model to perform a patient-specific safety assessment. The evaluation has been successful: the SAR and temperature patterns were corresponding to the ones of the target anatomy.",
    authors: [GC, EM, CC, RL],
    journal: ISMRM23 + "(2699)",
    date: "2023",
    link: "https://submissions.mirasmart.com/ISMRM2023/Itinerary/PresentationDetail.aspx?evdid=1236",
    type: "conference",
    tags: [_tmri, _tsimulation, _tir, _tis, _tsafety, _tsar],
    image: "assets/dalle/-12_1.png",
    download: undefined,
    DOI: null
  },
  {
    id: -10,
    title: "Oral Presentation (Magna Cum Laude): A deep learning model for the estimation of RF field trained from an analytical solution",
    abstract:
      "In the article we describe a neural network able to estimate the electric field from SNR and B1+ maps. The network was trained using the images obtained from a 2D analytical solution of an infinitely long circular cylinder excited by a conductive wire. The predicted images are in good agreement with the targets with a maximum mean square error of 0.28%. The performance of the network was also tested on a human body model with an error of 13.96%. These preliminary results are very promising and open the possibility to use the network on numerically simulated and experimentally acquired images.",
    authors: [EM, GC, CC, RL],
    journal:
      "IEEE International Symposium on Antennas and Propagation and USNC-URSI Radio Science Meeting, July 23–28, 2023 • Portland, Oregon, USA",
    date: "2022",
    link: "https://ieeexplore.ieee.org/abstract/document/10289426",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-10.png",
    download: undefined,
    DOI: null
  },
  {
    id: -9,
    title: "TESS: A Web-Accessible Tool for Temperature Estimation From Sar Simulation",
    abstract:
      "Purpose: Temperature, one of the most relevant parameters to assess MRI safety, is mainly estimated through numerical simulations. Several methods to compute temperature increase due to SAR exposure were recently proposed, with different levels of accuracy and computation speed [1-3]. Most of the temperature computation methods rely on the bioheat equation where W represents the blood perfusion, the material density, C the heat capacity, k the thermal conductivity, and Q the heat generated by metabolism. The subscripts bl denotes a blood property. Recently, there has been a growing interest in temperature increase estimation through numerical simulations because of the more common use of high-field scanners. Web-based accessible cloud-accessible software is also becoming very popular because of its simplicity to remotely run heavy computation algorithms. Therefore, we have developed “TESS”, Temperature Estimation from SAR Simulation, a web-accessible numerical simulator that allows running thermal simulations of MRI scans without using local resources, and without the need to install additional software on local machines. TESS enables calculations of SAR and temperature for non-uniform spatial grids, and for temporal variation of the power levels (for example associated with different sequences). Furthermore, TESS allows the user to select which computation method to use, with different levels of accuracy and computation speed. Methods: In order to estimate the temperature with TESS, knowledge of the numerical model of the anatomy with the tissue properties, the SAR distribution, and the power levels of the sequences of the MRI scan are necessary. All this information is passed from the Graphical User Interface (GUI) to the simulator as a parameter file composed of two sections: the first one reports information about the image, such as the dimensions of the field-of-view and the matrix size, while the second section contains all the links to the necessary files. Specifically, these files include the spatial distribution of the patient’s thermal properties that are in the bioheat equation, the spatial distribution of the SAR, the information on the spatial distribution of the mesh points (the mesh can be non-uniform), the temporal variation of the core body temperature and of the power levels of the pulse sequences. TESS allows developers and users to access software applications by means of a standardized web-based GUI [4-6], from which computations are run via Docker containers deployed locally or on the cloud. Results: Three tabs are used to set the parameters and to view results: Figures 2 and 3 report screenshots of the GUI interface to set the parameters of the calculation. As for other applications in Cloud MR [4-6], TESS has a “Home” tab, where users can manage their data and results files. In the “Set Up” tab (Figure 2), users can customize simulations by choosing the spatial and temporal resolution of the model and the duration of the simulated exam. Since the software allows simulations with non-uniform spatial grids, the user can also upload a file with the spatial variation of the resolution. The GUI can read a scalar matrix (i.e. NIFTI, MHA, MHD, …) or a point cloud (VTK, simple TXT). In the “Results” tab (Figure 3), users can check the status of the simulation tasks and select the successfully completed ones to display. In this tab, thermal map, SAR, and Core Body temperature can be analyzed by means of regions of interest. Conclusion: This work introduces TESS, an open-source software for the safety assessment of MRI scans, which will be made available to the scientific community in 2022 via the Cloud MR portal. The current version enables only the estimation of the final temperature, the new release following beta testing will include the dynamic evaluation of the temperature through the MRI exam. Furthermore, in the future we plan to allow users to generate temperature maps based on non-standard orthogonal views by means of different interpolators, e.g., nearest-neighbors, linear, and b-spline.",
    authors: [EM, GC, CC, RL],
    journal: "MR Safety: From Physics & Physiology to Policies & Practice",
    date: "2022",
    link: "https://www.ismrm.org/workshops/2022/Safety/reg.htm",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-9.png",
    download: undefined,
    DOI: null
  },
  {
    id: -8,
    title: "Effectiveness Of Game-based Software In Rehabilitation to Improve Eye-hand Coordination in Children With Cerebral Palsy And Cerebral Visual Impairment:A Single-subject Study",
    abstract:
      "Introduction: The current literature reveals a growing interest in infantile cerebral palsy (CP) about the link between cerebral visual impairment (CVI) and limitations on daily activities due to poor hand-eye coordination. New technological approaches are becoming feasible and promising therapeutic options in the fields of neurological and neurodevelopmental rehabilitation. Several researchers developed their own rehab software, but any clinical settings providing rehabilitation services encounter difficulties in the provision of standardized measures. In this study, the impact of a novel approach integrating a new neuro-psychovisual software in conventional neurodevelopmental therapy on the improvement of eye-hand coordination in CP patients was evaluated. Methods: Three children with CP and CVI were enrolled in this single-subject study. An interfaced touch-screen dual-mode software, named Eye Hand Mind Exercise (EHME-2), was utilized both to evaluate and to train manual-ocular coordination. The Test of Visual Perception (TPV) and the Melbourne Unilateral Upper Limb (MUUL) were employed to test manual and ocular skills related to neuro-psychovisual abilities and functional performances. Furthermore, EHME-2 recorded instrumental data such as the average latency for gaining 'touch' and the average persistence time in 'tracking' the target. In rehabilitation sessions, held twice weekly for three months, patients practiced using the software to move or follow several variable targets with different parameters tailored to their own preferences and achievements. Evaluations were administered as repeated baseline assessments (T0 and T1), post-intervention (T2), and at follow-up after 3 months (T3). Results: The functionality of the upper limbs and hand-eye coordination generally improved, and these gains persisted three months after treatment ended. Between T1 and T2, both the MUUL and TPV scores increased, with the MUUL score (p < 0.05) exceeding the smallest detectable difference (SDD) of 8.9%. EHME data showed a statistically significant increase (p < 0.01) when comparing baseline with post-treatment evaluations, considering the overall directions of movement for both upper limbs in all children. Conclusions: These encouraging results demonstrate the value of using customized, computer-based neuro-psychovisual training in clinical settings with measurable outcomes to enhance hand-eye coordination and daily activities in CP patients.",
    authors: [ElRa, AnAn, EM],
    journal: "International Scientific Congress AIFI 2022",
    date: "2022",
    link: "https://aifi.net/iscrizioni-aperte-allinternational-scientific-congress-aifi-2022-online-il-programma-preliminare/",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-8.png",
    download: undefined,
    DOI: null
  },
  {
    id: -7,
    title: "Oral Presentation: A multi-metric registration framework for the alignment of multimodal longitudinal brain images in pediatric oncology",
    abstract:
      "Survival of pediatric patients with a brain tumor has increased over the past 20 years, and increasing evidence of iatrogenic toxicities has been reported. In follow-ups, images are acquired at different time points where substantial changes of brain morphology occur due to childhood physiological development and treatment effects. To address the image registration complexity, we propose two multi-metric approaches (Mplus, Mdot), combining mutual information (MI) and normalized gradient field filter (NGF). The registration performance of the proposed metrics was assessed on a simulated dataset (Brainweb) and compared with those obtained by MI and NGF separately, using mean magnitude and mean angular errors. The most promising metric (Mplus) was then selected and tested on a retrospective dataset comprising 45 pediatric patients who received focal RT for brain tumors and underwent DTI exams and neurocognitive tests (23 males and 22 females, median age at RT 6.2 years, median age at evaluations 11.1 years). The quality of the realignment was scored by a radiation oncologist using a perceived misalignment metric (PM). All patients but one were assessed as PM ≤ 2 (good alignment), except one severely affected by hydrocephalus and pneumocephalus at the first MRI acquisition, who scored PM = 5 (unacceptable). The workflow allowed identification of 10 ROIs where RT dose and DTI metrics were significantly associated with cognitive test results (p < 0.05), implying a possible cognitive or neuropsychological iatrogenic damage that can be decreased by avoiding those areas in the treatment plan.",
    authors: [EM, ClCa, SM, EM, MaO, EmPe, MaLe, BaDi, OmAl, DP, VBi, ElSc, MB, MaMa, GePo, LM, FA, PaVe, EmPi, LG, RL],
    journal: "European Society of Medicine General Assembly 2022",
    date: "2022",
    link: "https://esmed.org/video-detail/?id=147",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-7.png",
    download: undefined,
    DOI: null
  },
  {
    id: -6,
    title: "Automatic segmentation of the hip bony structures on 3D Dixon MRI datasets using transfer learning from a neural network developed for the shoulder",
    abstract:
      "We describe a network for automatic segmentation of the acetabulum and femur on 3D-Dixon MRI data. Given the limited number of labeled 3D hip datasets publicly available, our network was trained using transfer learning from a network previously developed for segmentation of the shoulder bony structures. Using only 5 hip datasets for training, our network achieved segmentation dice of 0.719 and 0.92 for the acetabulum and femur, respectively. More training data is needed to improve results for the acetabulum. We show that transfer learning can enable automatic segmentation of the hip bones using a limited number of labeled training data.",
    authors: [EM, CeDe, TaRo, SoGy, RiKi, RL],
    journal:
      "30th Scientific Meeting of the International Society for Magnetic Resonance in Medicine (ISMRM). London (UK), 07-12 May 2022",
    date: "2022",
    link: "https://www.auntminnie.com/index.aspx?sec=ser&sub=def&pag=dis&ItemID=135830",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-6.png",
    download: undefined,
    DOI: null
  },
  {
    id: -5,
    title: "Oral Presentation (Magna Cum Laude): A web-accessible tool for Temperature Estimation from SAR Simulations ( TESS )",
    abstract:
      "TESS, Temperature Estimation from Sar Simulation, is a web-based application that performs safety assessments of MRI exams. It numerically solves modified versions of the bioheat equation that include parameters such as temporal variation of core body temperature and various physiological parameters. A web-based graphical user interface, accessible via the Cloud MR framework, enables users to set up simulations and display results.",
    authors: [EM, GC, CC, RL],
    journal:
      "30th Scientific Meeting of the International Society for Magnetic Resonance in Medicine (ISMRM). London (UK), 07-12 May 2022",
    date: "2022",
    link: "https://www.auntminnie.com/index.aspx?sec=ser&sub=def&pag=dis&ItemID=135830",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-5.png",
    download: undefined,
    DOI: null
  },
  {
    id: -4,
    title: "A software tool to assess radiofrequency coil designs with respect to ultimate intrinsic performance limits",
    abstract:
      "This work introduces POIROT (Performance Observer In Receive or Transmit), a web-based tool for the assessment of receive and transmit coil designs against ultimate intrinsic signal-to-noise ratio and transmit efficiency, respectively. It enables engineers, for the first time, to evaluate how good a design is and whether there is further room for improvement before building a prototype. POIROT currently includes ultimate intrinsic data for three numerical head models at different resolutions and magnetic field strengths. POIROT could be integrated with rapid numerical EM modeling tools to develop a pipeline for coil design optimization that uses ultimate performance as the benchmark.",
    authors: [EM, IoGe, BeZh, RL],
    journal:
      "30th Scientific Meeting of the International Society for Magnetic Resonance in Medicine (ISMRM). London (UK), 07-12 May 2022",
    date: "2022",
    link: "https://www.ismrm.org/22m/",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-4.png",
    download: undefined,
    DOI: null
  },
  {
    id: -3,
    title: "Comparison of 2D vs 3D Deep Learning Algorithms to Estimate Temperature Throughout the Human Body",
    abstract:
      "We developed and compared two different Deep-Learning (DL) based approaches to approximating temperature in subject-specific body models. The first involved use of a 2D U-net to predict temperature on a slice-by-slice basis, and the second involved use of a 3D U-net to predict temperature in the 3D body. The 3D approach greatly outperformed the 2D approach and was very fast.",
    authors: [GC, EM, RL, CC],
    journal:
      "30th Scientific Meeting of the International Society for Magnetic Resonance in Medicine (ISMRM). London (UK), 07-12 May 2022",
    date: "2022",
    link: "https://www.ismrm.org/22m/",
    type: "conference",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-3.png",
    download: undefined,
    DOI: null
  },
  {
    id: -2,
    title: "Seeking a widely adoptable practical standard to estimate signal-to-noise ratio in magnetic resonance imaging for multiple-coil reconstructions",
    abstract:
      "Background: Signal-to-noise ratio (SNR) is used to evaluate the performance of magnetic resonance (MR) imaging systems. Accurate and consistent estimations are needed to routinely use SNR to assess coils and image reconstruction techniques. Purpose: To identify a reliable and practical method for SNR estimation in multiple-coil reconstructions. Study Type: Technical evaluation and comparison. Subjects/Phantom: A uniform phantom and four healthy volunteers (35, 38, 39 y/o males, 25 y/o female). Assessment: Reference-standard SNR was calculated from 100 multiple replicas. Six SNR methods were compared against it: difference image (DI), analytic array combination (AC), pseudo-multiple-replica (PMR), generalized pseudo-replica (GPR), smoothed image subtraction (SIS), and DI with temporal instability correction (TIC). The assessment was repeated for different multiple-coil reconstructions. Statistical Tests: SNR methods were evaluated in terms of relative deviation (RD) and normalized mutual information (NMI) with respect to the reference-standard, using linear regression (0.05 significance level) to assess how different factors affect accuracy. Results: Average RD (phantom) for DI, AC, PMR, GPR, SIS, TIC was 7.9%, 6%, 6.7%, 10.1%, 40%, 14.6%, respectively. RD increased with acceleration. SNR maps with AC were the most similar to the reference-standard (NMI = 0.358). Considering all brain ROIs, average RD for all SNR methods varied 96% among volunteers, but remained approximately 10% for AC, PMR and GPR, whereas it was more than 30% for DI, SIS, and TIC. RD was mainly affected by image reconstruction (beta = 12) for AC and SNR entropy for SIS (beta = 19). Data Conclusion: AC provided accurate and robust SNR estimation. PMR and GPR are more generally applicable than AC. DI and TIC should be used only at low acceleration factors, when an additional noise-only scan cannot be acquired. SIS is a single-acquisition alternative to DI for GRAPPA reconstructions.",
    authors: [EM, RL],
    journal: "Journal of Magneti Resoncace Imaging JMRI",
    date: "2021",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/jmri.27816",
    type: "article",
    tags: [_tmri, _twebapp, _tsimulation, _tsnr, _tismrm, _tcloud],
    image: "assets/dalle/-2.png",
    download: undefined,
    DOI: null
  },
  {
    id: -1,
    title: "A web-accessible tool for rapid analytical simulations of MR coils via cloud computing",
    abstract:
      "DGF is a web-based application to simulate MR coils in the case of simple geometries that mimic actual anatomy. For example, spheres can model the head, whereas cylinders can model the torso, abdomen or extremities. Ultimate intrinsic performance limits can be calculated within the same framework and used as absolute references to evaluate coil designs. DGF relies on rapid analytical electrodynamic simulations based on dyadic Green’s functions, which are executed using Docker containers, either on local computers or via cloud computing. A web-GUI enables users to set up simulations and display results. DGF is part of the Cloud MR project.",
    authors: [EM, GC, RL],
    journal: "ISMRM 29th annual meeting and exhibition 15-20 May 2021",
    date: "2021",
    link: "https://ismrm-smrt21.us3.pathable.com/",
    type: "conference",
    tags: [_tmri, _tcloud, _tem, _tismrm],
    image: "assets/dalle/-1.png",
    download: DOC + "camrie.pdf",
    DOI: null
  },
  {
    id: 0,
    title: "Retrospective study of late radiation-induced damages after focal radiotherapy for childhood brain tumors",
    abstract:
      "Purpose: To study a robust and reproducible procedure to investigate a relation between focal brain radiotherapy (RT) low doses, neurocognitive impairment and late White Matter and Gray Matter alterations, as shown by Diffusion Tensor Imaging (DTI), in children. Methods and materials: Forty-five patients (23 males and 22 females, median age at RT 6.2 years, median age at evaluations 11.1 years) who had received focal RT for brain tumors were recruited for DTI exams and neurocognitive tests. Patients’ brains were parceled in 116 regions of interest (ROIs) using an available segmented atlas. After developing an ad hoc, home-made, multimodal and highly deformable registration framework, mean RT doses and DTI metrics values for each ROI were collected. The pattern of association between cognitive scores or domains and dose or DTI values was assessed in each ROI through both considering and excluding ROIs with mean doses higher than 75% of the prescription. Subsequently, a preliminary threshold value of dose discriminating patients with and without neurocognitive impairment was selected for the most relevant associations. Results: The workflow allowed identification of 10 ROIs where RT dose and DTI metrics were significantly associated with cognitive test results (p < 0.05). In 5/10 ROIs, RT dose and cognitive tests were associated with p < 0.01 and preliminary RT threshold dose values implying possible cognitive or neuropsychological damage were calculated. The analysis of domains showed that the “school-related activities” domain was most involved. Conclusion: This analysis, despite being conducted on a retrospective cohort of children, shows that identifying critical brain structures and their respective radiation dose thresholds is achievable by combining data from different sources with appropriate methodological tools. This supports the design of a prospective study to gain stronger evidence.",
    authors: [ClCa, SM, EM, MaO, EmPe, MaLe, BaDi, OmAl, DP, VBi, ElSc, MB, MaMa, GePo, LM, FA, PaVe, EmPi, LG],
    journal: "PLoS One",
    date: "2021",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0247748",
    type: "article",
    tags: [_trdm, _tneuro, _tbrain, _toncology, _tradiotherapy, _tped, _tmri],
    image: "assets/dalle/0.png",
    download:
      "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0247748&type=printable",
    DOI: "10.1371/journal.pone.0247748"
  },
  {
    id: 1,
    title: "Oral: CAMRIE - Cloud-Accessible MRI Emulator",
    abstract: "",
    authors: [EM, GC, CC, RL],
    journal: "ISMRM 28th annual meeting and exhibition 18-23 May 2020",
    date: "2020",
    link: "https://www.ismrm.org/20m/",
    type: "conference",
    tags: [_tmri, _tismrm, _tsimulation, _tem, _tcloud, _twebapp],
    image: "assets/dalle/1.png",
    download: DOC + "camrie.pdf",
    DOI: null
  },
  {
    id: 2,
    title: "A multi-metric registration strategy for the alignment of longitudinal brain images in pediatric oncology",
    abstract:
      "Survival of pediatric patients with brain tumor has increased over the past 20 years, and increasing evidence of iatrogenic toxicities has been reported. In follow-ups, images are acquired at different time points where substantial changes of brain morphology occur due to childhood physiological development and treatment effects. To address the image registration complexity, we propose two multi-metric approaches (Mplus, Mdot), combining mutual information (MI) and normalized gradient field filter (NGF). The registration performance of the proposed metrics was assessed on a simulated dataset (Brainweb) and compared with those obtained by MI and NGF separately, using mean magnitude and mean angular errors. The most promising metric (Mplus) was then selected and tested on a retrospective dataset comprising 45 pediatric patients who underwent focal radiotherapy for brain cancer. The quality of the realignment was scored by a radiation oncologist using a perceived misalignment metric (PM). All patients but one were assessed as PM ≤ 2 (good alignment), but the remaining one, severely affected by hydrocephalus and pneumocephalus at the first MRI acquisition, scored PM = 5 (unacceptable). These preliminary findings suggest that Mplus might improve registration accuracy in complex applications such as pediatric oncology when data are acquired over many years of follow-up, and is worth investigating.",
    authors: [EM, AB, MB, SM, ClCa, EmPe, BaDi, MaMa, MaO, GePo, FA, DP, EmPi, LG, PC, LM],
    journal: "Medical & Biological Engineering & Computing",
    date: "2020",
    link: "https://link.springer.com/article/10.1007/s11517-019-02109-4",
    type: "article",
    tags: [_tmri, _tir, _tis, _tneuro, _tped, _toncology, _tbrain, _tdwi, _tdti, _tradiotherapy],
    image: "assets/dalle/2.png",
    download: DOC + "montin2020.pdf",
    DOI: "10.1007/s11517-019-02109-4"
  },
  {
    id: 3,
    title: "Relevance of apparent diffusion coefficient features for a radiomics-based prediction of response to induction chemotherapy in sinonasal cancer",
    abstract:
      "In this paper, several radiomics-based predictive models of response to induction chemotherapy (IC) in sinonasal cancers (SNCs) are built and tested. Models were built as a combination of radiomic features extracted from three types of MRI images: T1-weighted, T2-weighted and apparent diffusion coefficient (ADC) maps. Fifty patients (aged 54 ± 12 years, 41 men) were included. Patients were classified as responders (25) or nonresponders (25). Not all images were acquired for every patient: 49 had T1, 50 had T2, and 34 had ADC maps. Only in 33 patients were all three acquired. Eighty-nine radiomic features were extracted, and dimensionality reduction was performed using PCA, selecting only the three main components. Different algorithms (trees ensemble, k-nearest neighbors, support vector machine, naïve Bayes) were used for classification. Several models were developed and performance assessed through 100 iterations of train/test splits, with AUCs ranging from 0.56 to 0.78. ADC-based models performed best. Trees ensemble yielded the highest AUC (0.78 for the T1+T2+ADC model) and was used for further analyses. For trees ensemble, models based on ADC features performed significantly better (P < 0.02) than those without ADC features, except for the T1+ADC model (AUC 0.71 vs 0.69, nonsignificant differences). The results suggest ADC-based radiomics is relevant for predicting IC response in SNCs.",
    authors: [MB, GiCa, CaRe, SiSd, EM, VaCo, LM, LL, PaBo],
    journal: "NMR in Biomedicine",
    date: "2020",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/32009265",
    type: "article",
    tags: [_tmri, _tdwi, _thn, _ttretresp, _toncology, _trdm],
    image: "assets/dalle/3.png",
    download: "https://onlinelibrary.wiley.com/doi/epdf/10.1002/nbm.4265",
    DOI: "10.1002/nbm.4265"
  },
  {
    id: 4,
    title: "Application of an OCT-based 3D reconstruction framework to the hemodynamic assessment of an ulcerated coronary artery plaque",
    abstract:
      "The rupture of a vulnerable plaque (ulceration) is the most common cause of myocardial infarction. It can be recognized by angiographic features such as prolonged intraluminal filling and delayed contrast clearance. However, due to limited angiographic resolution and acquisition frequency, diagnosis is challenging. This study applies a framework for in-silico analysis of disrupted hemodynamics due to an ulcerated lesion using a validated OCT-based reconstruction methodology and CFD simulations for wall shear stress computation. The method was applied to a stented coronary bifurcation phantom, and segmentation was validated against manual segmentation. Similarity indices were >96% for lumen segmentation and >77% for stent strut segmentation. The reconstruction was also compared with micro-CT data.",
    authors: [SuMi, ClCh, MB, EM, GaDu, CrAu, RoFe, FrBu, LM],
    journal: "Medical Engineering and Physics",
    date: "2020",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1350453320300072",
    type: "article",
    tags: [_tcardio, _tcsd, _tcad, _tis, _toct],
    image: "assets/dalle/4.png",
    download: DOC + "sumi2020.pdf",
    DOI: null
  },
  {
    id: 5,
    title: "Automatic segmentation of optical coherence tomography pullbacks of coronary arteries treated with bioresorbable vascular scaffolds: Application to hemodynamics modeling",
    abstract:
      "Automatic algorithms for stent strut segmentation in OCT images of coronary arteries have been developed, particularly for metallic stents. This study develops and validates a segmentation algorithm for detecting both lumen contours and polymeric bioresorbable scaffold struts from 8-bit OCT images, and a method for automatic OCT pullback quality assessment. The segmentation process comprises four steps and is validated against manual segmentation of 1150 images from 23 in vivo OCT pullbacks. The results are then used for reconstructing a patient-specific stented coronary artery for CFD analysis.",
    authors: [MB, SuMi, EM, RaRa, GaDu, FM, LM, ClCh],
    journal: "PLoS ONE",
    date: "2019",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/30870477",
    type: "article",
    tags: [_tcardio, _tcsd, _tcad, _tis, _toct],
    image: "assets/dalle/5.png",      
    download:"https://www.researchgate.net/publication/331759079_Automatic_segmentation_of_optical_coherence_tomography_pullbacks_of_coronary_arteries_treated_with_bioresorbable_vascular_scaffolds_Application_to_hemodynamics_modeling/fulltext/5c8affbea6fdcc3817541e30/Automatic-segmentation-of-optical-coherence-tomography-pullbacks-of-coronary-arteries-treated-with-bioresorbable-vascular-scaffolds-Application-to-hemodynamics-modeling.pdf",
   DOI:"10.1007/s11517-019-02109-4"
},
{
    id:6,
    title :"Radiomics-based prediction of response to induction chemotherapy in sinonasal cancer",
    abstract:"Forty-two patients with sinonasal cancer (53 ± 12 years, 34 men) were considered in this study. Different types of MRIs were acquired at baseline: T1-weighted images (T1WI), T2-weighted (T2WI) images and diffusion weighted images (DWI). In particular, 41 patients had T1WI, 42 patients had T2WI and 28 patients had DWI. MRI scanners with 1.5T were used. The T1WI and T2WI were acquired using spin-echo sequences, while echo-planar imaging was used for the acquisition of the DWI.Clinical data were also acquired for each patient. In particular, the response to IC was evaluated using the Response and Evaluation Criteria in Solid Tumors (RECIST). Using the RECIST score, patients were divided in responders (partial or complete responders) and non-responders (stable or progressive disease). The distribution of the two classes was even (21 responders and 21 non-responders). The tumor region was manually segmented by an expert radiologist. Intensity standardization was applied to T1WI and T2WI to normalize the range of intensities of the different images. In particular, quantile 0 to 0.98 of the intensities of the images were linearly mapped to the range 0-5000. DWI were used to compute the Apparent Diffusion Coefficient (ADC), which is a quantitative    measure and therefore does not need normalization. For each image type (T1WI, T2WI and ADC) a separate radiomic analysis was performed. In particular, 89 radiomic     features divided in 3 categories (first-order statistics, textural and geometrical features) were  extracted.   Z-score normalization was performed to     normalize the ranges of variability of the features. Several predictive models were tested, differing for type of image analyzed (T1WI, T2WI or ADC), and number of features (added to the model according to a rank based on statistical significance). Logistic regression was used as classification algorithm. Leave-one-out cross-validation was performed to evaluate each model. The metrics of evaluation were classification accuracy and area under the curve (AUC). Results The best performance was obtained from ADC-based models (85.7% using 55 features, AUC 0.85). T1WI and T2WI gave worse results (peak accuracy around 60%, AUC around 0.6). Conclusion Radiomic analysis of pre-treatment imaging provides a potential, non-invasive, way to predict response to IC. Radiomics based on T1WI and T2WI was not useful in predicting response to IC, while predictive models based on ADC features reached up to 85% accuracy and AUC of 0.85.",
    authors:[MB,GiCa,CaRe,SiSd,EM,VaCo,LM,LL,PaBo],
    journal: "7TH ICHNO: INTERNATIONAL CONFERENCE ON INNOVATIVE APPROACHES IN HEAD & NECK ONCOLOGY",
    date: "2019",
    link: "https://www.thegreenjournal.com/article/S0167-8140(19)30281-6/abstract",
    type:"conference",
    tags:[_tmri,_trdm,_tdwi,_ttretresp,_thn,_toncology,_trecist,_tfeatureselection,_tml,_tradiomic,_tfeatureselection],
    image: "assets/dalle/6.png",
    download:DOC + "bolo2019.pdf",
   DOI:"0.1007/s11517-019-02109-4"
},
{
    id:7,
    title :"Assessment of Stability and Discrimination Capacity of Radiomic Features on Apparent Diffusion Coefficient Images",
    abstract:"The objectives of the study are to develop a new way to assess stability and discrimination capacity of radiomic features without the need of test-retest or multiple delineations and to use information obtained to perform a preliminary feature selection. Apparent diffusion coefficient (ADC) maps were computed from diffusion-weighted magnetic resonance images (DW-MRI) of two groups of patients: 18 with soft tissue sarcomas (STS) and 18 with oropharyngeal cancers (OPC). Sixty-nine radiomic features were computed, using three different histogram discretizations (16, 32, and 64 bins). Geometrical transformations (translations) of increasing entity were applied to the regions of interest (ROIs), and the intra-class correlation coefficient (ICC) was used to compare the features computed on the original and modified ROIs. The distribution of ICC values for minimal and maximal entity translations (ICC 10 and ICC 100 , respectively) was used to adjust thresholds of ICC (ICC min and ICC max ) used to discriminate between good, unstable (ICC 10 < ICC min ), and non-discriminative features (ICC 100 > ICC max ). Fifty-four and 59 radiomic features passed the stability-based selection for all the three histogram discretizations for the OPC and STS datasets, respectively. The excluded features were similar across the different histogram discretizations (Jaccard’s index 0.77 ± 0.13 and 0.9 ± 0.1 for OPC and STS, respectively) but different between datasets (Jaccard’s index 0.19 ± 0.02). The results suggest that the observed radiomic features are mainly stable and discriminative, but the stability depends on the region of the body under observation. The method provides a way to assess stability without the need of test-retest or multiple delineations.",
    authors:[MB,VaCo,EM,AnMe,GiCa,FrGr,SiSd,LM],
    journal: "Journal of Digital Imaging",
    date: "2018",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/29725965",
    type:"article",
    tags:[_tmri,_trdm,_tdwi,_thn,_toncology,_trecist,_tfeatureselection,_tml],
    image: "assets/dalle/7.png",
    download:"https://link.springer.com/content/pdf/10.1007/s10278-018-0092-9.pdf",
   DOI:"10.1007/s11517-019-02109-4"
},

{
    id:8,
    title :"MR optimum - A web-based application for signal-to-noise ratio evaluation",
    abstract:"",
    authors:[EM,RoWi,ToBl,RL],
    journal: "ISMRM 27th annual meeting and exhibition",
    date: "2019",
    link: "http://www.cloudmrhub.com",
    type:"conference",
    tags:[_tmri,_tismrm, _tsimulation,_tem,_tcloud,_twebapp],
    image: "assets/dalle/8.png",
        download:DOC + "mroptimum.pdf",
        DOI:null
},{
  id: 9,
  title: "A patient-specific study investigating the relation between coronary hemodynamics and neo-intimal thickening after bifurcation stenting with a polymeric bioresorbable scaffold",
  abstract: "We present an application of a validated reconstruction methodology for the comparison between patient-specific hemodynamics and neo-intimal thickening at nine months from the intervention. (1) Background: Coronary bifurcation stenting alters the vessel geometry, influencing the local hemodynamics. The evaluation of wall shear stress (WSS) relies on the application of computational fluid dynamics to model its distribution along the coronary tree. The endothelium actively responds to WSS, which triggers eventual cell proliferation to cover the stent struts. (2) Methods: Baseline optical coherence tomography and angiographic data were combined to reconstruct a patient-specific coronary bifurcation with an implanted bioresorbable scaffold and to simulate the hemodynamics. Results were linked with the neo-intimal thickening after nine months from the intervention. (3) Results: Blood velocity patterns were disrupted at the bifurcation due to the presence of the stent. It was observed that 55.6% of the scaffolded lumen surface was exposed to values of time-averaged WSS lower than 0.4 Pa. Follow-up images showed a luminal narrowing of 19% in the main branch. There was also a complete coverage in 99% of struts. (4) Conclusions: This approach provided valuable complementary information that might improve the clinical outcomes in this subset of coronary diseases.",
  authors: [SuMi, RaRa, MB, EM, FrBu, DaSm, GaDu, LM, FM, JaCo, ClCh],
  journal: "Applied Science",
  date: "2018",
  link: "https://www.mdpi.com/2076-3417/8/9/1510",
  type: "article",
  tags: [_tmri],
    image: "assets/dalle/9.png",
  download: "https://www.mdpi.com/2076-3417/8/9/1510/pdf",
  DOI: "10.3390/app8091510"
},
{
  id: 10,
  title: "Retrospective study of late radiation damages after focal radiotherapy for childhood brain tumors",
  abstract: "Purpose: Investigate late radiation damages after focal radiotherapy (RT) for childhood brain cancer in terms of neurocognitive outcome. Methods 45 retrospective children (age at RT:median = 6.2 years, range 1.1–22.5, age at valuations:median = 11.1 years, range 4.4–25.9) who received focal RT at our Institution with at least 3-years follow-up without relapse, were recruited to undergo cognitive, neuropsychological and psychological testing. Planning CT images were retrieved and patients’ brains were parceled in 116 regions of interest (ROIs) using the Tzourio-Mazoyer atlas [1] and a dedicated home-made, multimodal, highly deformable registration framework specifically developed for the study. Mean RT dose value was collected for each ROI. The pattern of association between the categorized cognitive tests scores and RT dose was assessed in each ROI through the Kruskal Wallis test. Subsequently, the preliminary threshold of RT dose (optimal cut-off value) discriminating patients with and without neurocognitive changes (impaired/non-impaired patients), was selected by using a Receiver Operating Characteristic curve (ROC). Results The statistical analysis allowed us to identify the ROIs where mean dose values and cognitive tests results were significantly related. For the 29 ROIs showing the most significant associations, preliminary threshold dose values related to a specific cognitive or neuropsychological damage were obtained, ranging from 3.5 to 29.8 Gy. As an example, Figure1 shows the distributions of dose values in the ROI “Frontal_ Sup_Orb_ R” for patients with impaired/non-impaired performances in a specific cognitive test (Processing Speed Index, WISC III). Conclusions The preliminary analysis of the retrospective children suggested that the main aim (identify brain structures highly susceptible to radiation damages and the respective radiation dose thresholds) is achievable, justifying a prospective study currently open to children enrollment. Partially funded by AIRC.",
  authors: [SM, ClCa, MLe, EM, MaO, EmPe, FrSp, BaDi, VBi, ElSc, FA, MaMa, LM, PaVe, EmPi, LG],
  journal: "Physica Medica",
  date: "2018",
  link: "https://www.sciencedirect.com/science/article/abs/pii/S1120179718301194",
  type: "article",
  tags: [_tmri, _toncology, _tped, _tbrain, _tdwi, _tct, _tir, _tradiotherapy],
    image: "assets/dalle/10.png",
  download: DOC + "meroni.pdf",
  DOI: "10.1016/j.physmed.2018.04.003"
},
{
  id: 11,
  title: "Use of apparent diffusion coefficient images to predict response to induction chemotherapy in sinonasal cancer.",
  abstract: "The purpose of this study is to identify a set of radiomic features extracted from apparent diffusion coefficient (ADC) maps, obtained using baseline diffusion weighted magnetic resonance imaging (DW-MRI), which are able to predict the outcome of induction chemotherapy (IC) in sinonasal cancers. Such prediction could help the clinician defining the better treatment for a particular patient. Eighty-eight radiomic features were extracted from the ADC maps of 15 patients that underwent IC. A preliminary filtering of the features was made by assessing their stability to geometrical transformations of the region of interest (ROI). Mann-Whitney tests corrected for control of false discoveries were performed to identify the features that could discriminate between responsive and nonresponsive patients (4 and 11 respectively). Twenty features were found to be able to discriminate the two groups and they can potentially be used for prediction of response to treatment.",
  authors: [MB, EM, VaCo, PaBo, GiCa, LM],
  journal: "Proceedings of the Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
  date: "2018",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/30440511",
  type: "conference",
  tags: [_tmri, _toncology, _tped, _tbrain, _tdwi, _trdm, _tml, _tfeatureselection],
    image: "assets/dalle/11.png",
  download: DOC + "boloEMBS.pdf",
  DOI: null
},
{
  id: 12,
  title: "Radiomic analysis of soft tissues sarcomas can distinguish intermediate from high-grade lesions",
  abstract: "Purpose: To assess the feasibility of grading soft tissue sarcomas (STSs) using MRI features (radiomics). Materials and Methods: MRI (echo planar SE, 1.5T) from 19 patients with STSs and a known histological grading, were retrospectively analyzed. The apparent diffusion coefficient (ADC) maps, obtained by diffusion-weighted imaging acquisitions, were analyzed through 65 radiomic features, intensity-based (first order statistics, FOS) and texture (gray level co-occurrence matrix, GLCM; and gray level run length matrix, GLRLM) features. Feature selection (sequential forward floating search) and classification (k-nearest neighbor classifier) were performed to distinguish intermediate- from high-grade STSs. Classification was performed using the three different sub-groups of features separately as well as all the features together. The entire dataset was divided in three subsets: the training, validation and test set, containing, respectively, 60, 30, and 10% of the data. Results: Intermediate-grade lesions had a higher and less disperse ADC values compared with high-grade ones: most of FOS related to intensity are higher for the intermediate-grade STSs, while FOS related to signal variability were higher in the high grade (e.g., the feature variance is 2.6*10^5 ± 0.9*10^5 versus 3.3*10^5 ± 1.6*10^5, P = 0.3). The GLCM features related to entropy and dissimilarity were higher in the high-grade. When performing classification, the best accuracy is obtained with a maximum of three features for each subgroup, FOS features being those leading to the best classification (validation set: FOS accuracy 0.90 ± 0.11, area under the curve [AUC] 0.85 ± 0.16; test set: FOS accuracy 0.88 ± 0.25, AUC 0.87 ± 0.34). Conclusion: Good accuracy and AUC could be obtained using only few Radiomic features, belonging to the FOS class.",
  authors: [VaCo, EM, AnMe, PaCa, AlGr, AlMa, LM],
  journal: "Journal of Magneti Resoncace Imaging JMRI",
  date: "2018",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/28653477",
  type: "article",
  tags: [_tmri, _trdm, _tstaging, _toncology, _tml, _tfeatureselection, _tsarcomas],
    image: "assets/dalle/12.png",
  download: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456060/pdf/pone.0177495.pdf",
  DOI: null
},
{
  id: 13,
  title: "A framework for computational fluid dynamic analyses of patient-specific stented coronary arteries from optical coherence tomography images",
  abstract: "The clinical challenge of percutaneous coronary interventions (PCI) is highly dependent on the recognition of the coronary anatomy of each individual. The classic imaging modality used for PCI is angiography, but advanced imaging techniques that are routinely performed during PCI, like optical coherence tomography (OCT), may provide detailed knowledge of the pre-intervention vessel anatomy as well as the post-procedural assessment of the specific stent-to-vessel interactions. Computational fluid dynamics (CFD) is an emerging investigational tool in the setting of optimization of PCI results. In this study, an OCT-based reconstruction method was developed for the execution of CFD simulations of patient-specific coronary artery models which include the actual geometry of the implanted stent. The method was applied to a rigid phantom resembling a stented segment of the left anterior descending coronary artery. The segmentation algorithm was validated against manual segmentation. A strong correlation was found between automatic and manual segmentation of lumen in terms of area values. Similarity indices resulted >96% for the lumen segmentation and >77% for the stent strut segmentation. The 3D reconstruction achieved for the stented phantom was also assessed with the geometry provided by X-ray computed micro tomography scan, used as ground truth, and showed the incidence of distortion from catheter-based imaging techniques. The 3D reconstruction was successfully used to perform CFD analyses, demonstrating a great potential for patient-specific investigations. In conclusion, OCT may represent a reliable source for patient-specific CFD analyses which may be optimized using dedicated automatic segmentation algorithms.",
  authors: [SuMi, ClCh, MB, EM, GaDu, CrAu, RoFe, FrBu, LM],
  journal: "Medical Engineering and Physics",
  date: "2017",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/28711588",
  type: "article",
  tags: [_tcardio, _tcsd, _tcad, _tis, _toct],
    image: "assets/dalle/13.png",
  download: DOC + "sumi2017.pdf",
  DOI: "10.1016/j.medengphy.2016.10.012"
},
{
  id: 14,
  title: "Reconstruction of stented coronary arteries from optical coherence tomography images: Feasibility, validation, and repeatability of a segmentation method",
  abstract: "Optical coherence tomography (OCT) is an established catheter-based imaging modality for the assessment of coronary artery disease and the guidance of stent placement during percutaneous coronary intervention. Manual analysis of large OCT datasets for vessel contours or stent struts detection is time-consuming and unsuitable for real-time applications. In this study, a fully automatic method was developed for detection of both vessel contours and stent struts. The method was applied to in vitro OCT scans of eight stented silicone bifurcation phantoms for validation purposes. The proposed algorithm comprised four main steps, namely pre-processing, lumen border detection, stent strut detection, and three-dimensional point cloud creation. The algorithm was validated against manual segmentation performed by two independent image readers. Linear regression showed good agreement between automatic and manual segmentations in terms of lumen area (r>0.99). No statistically significant differences in the number of detected struts were found between the segmentations. Mean values of similarity indexes were >95% and >85% for the lumen and stent detection, respectively. Stent point clouds of two selected cases, obtained after OCT image processing, were compared to the centerline points of the corresponding stent reconstructions from micro computed tomography, used as ground-truth. Quantitative comparison between the corresponding stent points resulted in median values of ∼150 μm and ∼40 μm for the total and radial distances of both cases, respectively. The repeatability of the detection method was investigated by calculating the lumen volume and the mean number of detected struts per frame for seven repeated OCT scans of one selected case. Results showed low deviation of values from the median for both analyzed quantities. In conclusion, this study presents a robust automatic method for detection of lumen contours and stent struts from OCT as supported by focused validation against both manual segmentation and micro computed tomography and by good repeatability.",
  authors: [ClCh, EM, MB, SuMi, CrAu, FrBu, SiCe, GaDu, FM, LM],
  journal: "PLoS ONE",
  date: "2017",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/28574987",
  type: "article",
  tags: [_tcardio, _tcsd, _tcad, _tis, _toct],
    image: "assets/dalle/14.png",
  download: "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0177495&type=printable",
  DOI: "10.1371/journal.pone.0177495"
},
{
  id: 15,
  title: "Reconstruction of stented coronary arteries for CFD analyses : from in vitro to patient-specific models",
  abstract: "Optical coherence tomography (OCT) is an established catheter-based imaging modality for the assessment of coronary artery disease and the guidance of stent placement during percutaneous coronary intervention. Manual analysis of large OCT datasets for vessel contours or stent struts detection is time-consuming and unsuitable for real-time applications. In this study, a fully automatic method was developed for detection of both vessel contours and stent struts. The method was applied to in vitro OCT scans of eight stented silicone bifurcation phantoms for validation purposes. The proposed algorithm comprised four main steps, namely pre-processing, lumen border detection, stent strut detection, and three-dimensional point cloud creation. The algorithm was validated against manual segmentation performed by two independent image readers. Linear regression showed good agreement between automatic and manual segmentations in terms of lumen area (r>0.99). No statistically significant differences in the number of detected struts were found between the segmentations. Mean values of similarity indexes were >95% and >85% for the lumen and stent detection, respectively. Stent point clouds of two selected cases, obtained after OCT image processing, were compared to the centerline points of the corresponding stent reconstructions from micro computed tomography, used as ground-truth. Quantitative comparison between the corresponding stent points resulted in median values of ∼150 μm and ∼40 μm for the total and radial distances of both cases, respectively. The repeatability of the detection method was investigated by calculating the lumen volume and the mean number of detected struts per frame for seven repeated OCT scans of one selected case. Results showed low deviation of values from the median for both analyzed quantities. In conclusion, this study presents a robust automatic method for detection of lumen contours and stent struts from OCT as supported by focused validation against both manual segmentation and micro computed tomography and by good repeatability.",
  authors: [SuMi, MB, EM, GaDu, CrAu, FrBu, LM, FM, ClCh],
  journal: "Proceedings VII Meeting Italian Chapter of the European Society of Biomechanics (ESB-ITA 2017)",
  date: "2017",
  link: "https://www.semanticscholar.org/paper/Reconstruction-of-stented-coronary-arteries-for-CFD-Migliori-Bologna/d034dfd1769efae5deec18524c5842ddd55944c2",
  type: "conference",
  tags: [_tcardio, _tcsd, _tcad, _tis, _toct],
    image: "assets/dalle/15.png",
  download: DOC + "chiastra2017.pdf",
  DOI: null
},
{
  id: 16,
  title: "A method for coronary bifurcation centerline reconstruction from angiographic images based on focalization optimization",
  abstract: "A method for the reconstruction of a vessel centerline from angiographic images is outlined in this work. A typical coronary artery segment with bifurcations was emulated with a 3D printed static phantom and several angiograms were acquired at various angular positions on the C-Arm. The effectiveness of the reconstruction turned out to be largely influenced by the intrinsic parameters of the angiographic system, particularly the homogeneous coordinates system scaling factor λ. Therefore, recourse was made to a heuristic optimization method to estimate the optimal value of λ for each view. We measured the reliability of the reconstruction method by varying the fitness function of the optimization step and measuring the distances of 8 test points in comparison to the corresponding points identified in the μCT centerline. Preliminary results showed that, with an adequate number of views, the adoption of the optimal fitness function allowed the median distance error to be decreased below the acceptance threshold of 10%. As expected, the reliability of the method is improved by increasing the number of processed views.",
  authors: [EM, SuMi, ClCh, CCr, RoFe, CrAu, Mle, FrBu, FM, LM],
  journal: "Proceedings of the Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
  date: "2016",
  link: "https://ieeexplore.ieee.org/document/7591644",
  type: "conference",
  tags: [_tcardio, _tcsd, _tcad, _tis, _toct],
    image: "assets/dalle/16.png",
  download: DOC + "montin2016.pdf",
  DOI: "10.1109/EMBC.2016.7591644"
},
{
  id: 17,
  title: "Nasopharyngeal carcinoma lymph nodes evaluation during therapy through diffusionweighted magnetic resonance images",
  abstract: "In order to assess the evolution of lesions during therapy, radiologists have to integrate information arising from different imaging techniques (e.g. morphological and functional) and time points (e.g. pre and post treatment). The purpose of this study was to quantitatively evaluate the treatment effect of chemotherapy on nasopharyngeal pathological carcinoma (NPC) using a semi-automatic framework integrating these data. The model concerns three main phases: 1) coregistration of volumes arising from the same time point on a common 3D uniform mesh; 2) pathological lymph nodes (PLN) identification in pre and post treatment volumes (PRE, POST); 3) tissues evaluation through apparent diffusion coefficient (ADC). The output of this procedure was compared to a hand made definition, performed on 12 patients longitudinally scanned. Each patient had a strong reduction of the NPC volume as reported by both qualitative and quantitative evaluations (Wilcoxon rank sum test P=0.885), the average volume decrease computed by the radiologist and by the semi-automatic segmentation procedure were: −79.21%±21.49% and −78.26%± 21.23% and the mean magnitude difference among them was 2.60% ± 2.02%. Although therapy induces morphological and functional changes on NPC lesions, this framework demonstrates a high sensibility and specificity.",
  authors: [EM, DzSe, PP, LM],
  journal: "6th European Conference of the International Federation for Medical and Biological Engineering",
  date: "2015",
  link: "https://link.springer.com/chapter/10.1007/978-3-319-11128-5_53",
  type: "conference",
  tags: [_tmri, _tstaging, _toncology, _tml, _tfeatureselection, _thn],
    image: "assets/dalle/17.png",
  download: "https://www.researchgate.net/profile/Eros_Montin/publication/282373770_Nasopharyngeal_Carcinoma_Lymph_Nodes_Evaluation_during_Therapy_through_Diffusion_Weighted_Magnetic_Resonance_Images/links/566e9adb08aea0892c529df7/Nasopharyngeal-Carcinoma-Lymph-Nodes-Evaluation-during-Therapy-through-Diffusion-Weighted-Magnetic-Resonance-Images.pdf",
  DOI: "10.1007/978-3-319-11128-5_53"
},
{
  id: 18,
  title: "Biomechanical evaluation of skin and melanocytic naevi",
  abstract: "Pigmented skin lesions can be either benign(melanocytic naevus) or malignant (melanoma). Malignantmelanoma is a highly aggressive tumor causing more than 75%of skin cancer deaths. Early diagnosis of melanoma significantlyreduces the associated mortality. Unfortunately, currentmethodologies mainly based on imaging techniques are notalways effective and a definite diagnosis requires excision biopsy. A biomechanical analysis could help the early diagnosis ofmelanoma as differences in the mechanical properties of the skinfamilies of cells have been reported, (melanocytes stiffer thankeratinocytes). As number and aggregation of melanocytesincrease from melanocytic naevus to melanoma, the evaluation ofthe stiffness of the skin layers could help in discriminating benignand malignant lesions. In this study, depth-dependent (i.e. acrossthe skin layers) displacements (consequent to a superficialmechanical stimulus) beneath melanocytic naevi andsurrounding skin are investigated to assess possible differences inmaterial properties. To this end, a methodology involving anexperimental campaign and image registration strategy wasdeveloped and applied to six healthy cases. A statisticallysignificant difference in the slope of the depth-dependentdisplacement was observed, indicating higher stiffness formelanocytic naevi. These novel findings suggest the potentialityof a biomechanical characterization of the pigmented skin lesions",
  authors: [ElCu, GaFr, FeCr, EM, GiSp, AlTe, LM, GiPe],
  journal: "CAE fostering a synergistic environment in engineering simulaiton!",
  date: "2015",
  link: "http://meeting2016.enginsoft.it/poster/PosterAward2016_nominated%2046.pdf",
  type: "conference",
  tags: [],
    image: "assets/dalle/18.png",
  download: DOC + "cutri2015.pdf",
  DOI: null
},
{
  id: 19,
  title: "Image registration framework to investigate children neurocognitive outcome after focal brain irradiation",
  abstract: "Purpose/Objective: To evaluate the reliability of a framework for correlation of dose distribution (DD) and Magnetic Resonance (MRI) information related to long term neurocognitive outcome in pediatric patients (pts) focally irradiated for primitive malignant brain tumors. Image registration during oncological therapy is a difficult task, which becomes even harder when there is a large gap between acquisition times of successive scans. Materials and Methods: The main challenges of the workflow were the fusion of CT on a morphological MRI acquired at the time of the treatment (MR0) and the fusion of MR0 with the revaluation morphological MRI (MR1) and functional diffusion tensor imaging (DTI) acquired 3 to 10 years after RT. As a pilot study CT and DD were collected for 18 pediatric pts who completed RT at least 3 years before revaluation. CT and DD were registered to MR0, following a multi step process made of rigid registrations. The registered images were further matched with MR1 through a global (affine) and a local (free form deformation based on b-spline) deformation using mutual information as similarity metric. A similar approach was used for the functional registration. The alignment was scored by a neuroradiologist, a radiotherapist and a medical physicist by drawing contours of regions of interest (ROI) on the source images. The ROIs were deformed using the deformation field estimated by the registration procedure and superimposed to their target images, thus making the evaluation possible. By applying this framework it was possible to map the DD and the DTI maps on a common space defined by the MR1 for the subsequent statistical evaluation. A brain atlas was registered on MR1 by rigid and non rigid registrations in order to label white matter regions of interest. Correlation of white matter regions, DD and DTI maps was then achievable. Neurocognitive tests were made to evaluate cognitive and psychological features and executive functions of the pts. Statistical analysis is being performed. Results: For the CT-MR0 registration the average score obtained was 2.27 (being 0 the score assigned to the perfect alignment and 5 to the worst one. 3 was considered sufficient), while the MR0-MR1 fusion obtained 1.47; and DTIMR1 fusion 1.1. Concerning the statistical analysis, preliminary results indicate a correlation between dose values and fractional anisotropy values obtained from DTI maps for the frontal superior lobe left and right, the right anterior cingulum and right putamen. Conclusions: Our multi step registration process was able to account for different positions of the patient during the radiological studies and even for patient growth. The low score obtained for CT-MR0 registration was mainly due to the poor quality of older CT images. This image registration study represents the backbone of a larger clinical study that will also include prospective pts to correlate DD to functional neurocognitive damages. Partially founded by Associazione Italiana per la Ricerca sul Cancro (AIRC).",
  authors: [SM, EM, FA, ClCa, GePo, MaO, EmPe, EmPi, ElSc, BaDi, MaMa, LG],
  journal: "Radiotherapy and Oncology",
  date: "2015",
  link: "https://www.thegreenjournal.com/article/S0167-8140(15)41523-3/fulltext",
  type: "conference",
  tags: [_tmri, _tct, _tir, _tped, _tbrain, _toncology, _tradiotherapy, _ttretresp, _tneuro],
    image: "assets/dalle/19.png",
  download: undefined,
  DOI: "10.1016/j.radonc.2015.06.008"
},
{
  id: 20,
  title: "Tuning of a deformable image registration procedure for skin component mechanical properties assessment",
  abstract: "Several studies report the mechanical properties of skin tissues but their values largely depend on the measurement method. Therefore, we investigated the feasibility of recognizing the cellular constituents mechanical properties of pigmented skin by Confocal Laser Scanner Microscopy (CLSM). With this purpose, an healthy volunteer was examined in two configurations: deforming and non deforming the nevus in three areas nearby the pigmented skin lesion. The mechanical behavior of the nevus was then assessed by means of deformable registration of the images in the two configurations. There exist several registration strategy able to overcome this task, among them, we proposed two strategies with different deformation model: a Free Form Deformation (FFD) based on b-spline and a second one based on Demons Registration Algorithm (DRA). These two strategies need the definition of several parameters in order to obtain optimal registration performances. Thus, we tuned these parameters by means of simulated data and evaluated their registration abilities on real in vivo CLSM acquisitions. The results highlighted that the registration using DRA reached a better performance in comparison to the FFD one, in particular two areas among the three the DRA performance was significantly better than the FFD one. The registration procedure highlighted bio-mechanical differences among the chosen areas.",
  authors: [EM, ElCu, GiSp, AlTe, GiPe, LM],
  journal: "Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
  date: "2015",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/26737734",
  type: "conference",
  tags: [],
    image: "assets/dalle/20.png",
  download: "https://scitepress.org/papers/2012/37775/37775.pdf", // Note: original download URL provided
  DOI: "10.1109/EMBC.2015.7319664"
},
{
  id: 21,
  title: "Combined approach for the biomechanical characterization of skin lesions",
  abstract: "Melanocytic nevi are common benign skin lesions, known as moles, due to proliferation of melanocytes, the pigmented skin cells. The uncontrolled growth of these cells leads instead to cutaneous malignant melanoma, an aggressive tumour whose rate of survival dramatically increases if early diagnosis is provided. Alteration on the mechanical properties of the skin in presence of lesions has been assessed. In this context, we aim at developing a combined approach consisting of an experimental and a computational study to biomechanically characterize the skin and both malign and benign skin lesions (i.e., nevi and malignant melanoma). In particular, the former study is performed to evaluate the biomechanical response of the different skin layers after the application of a displacement field and relies on a multi-scale strategy, ranging from the tissue level to the cellular level. Computational models will be tuned against experimental data (e.g., confocal laser scanning microscopy data) to estimate the mechanical properties of the different layers of the skin and the skin lesions. In particular, the confocal laser scanning microscopy is able to provide non-invasive histomorphological analysis of skin in vivo. The integration of the experimental and the computational results will allow the evaluation of possible alterations of the local mechanical properties occurring in case of pathological condition.",
  authors: [GaFr, FeCr, ElCu, GrSp, EM, GiSp, AlTe, LM, GiPe],
  journal: "Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
  date: "2015",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/26736411",
  type: "conference",
  tags: [],
    image: "assets/dalle/21.png",
  download: undefined,
  DOI: null
},
{
  id: 22,
  title: "A Full Automatic Method for the Soft Tissues Sarcoma Treatment Response Based on Fuzzy Logic",
  abstract: "Aim of this study was to develop a full automatic method for the soft tissue sarcoma (STS) identification and its evaluation during chemotherapy (CT) treatment, based on diffusion MRI. This procedure includes two main phases, the first one is a registration step in order to compose a coregistered set of images concerning morphological and functional images pre and post CT, registered to the pre-treatment T1. The second phase is a fuzzy characterization of STS diffusive parameter along with a fuzzy inference step for the evaluation of treatment response on the characterized area. The results of this procedure are two membership degree maps which measure the probability for each segmented pixel to be responding or not to CT. These two maps could assist radiologists during follow-up assessment, by automatically extracting the lesion volume, report lesion composition, and measure the uncertainty of the estimate, in order to manage the intrinsic and well-known heterogeneity of STS. Many studies demonstrated the prognostic values of diffusion MRI and the apparent diffusion coefficient (ADC) in the assessment of cellularity changes during therapy and their correlation with lesion response. In this scenario, the proposed framework, allows for a total unsupervised identification and probabilistic evaluation of STS treatment response based on diffusion MRI, mapping the local changes of ADC during therapy rather than describe the whole lesion by a statistical moment.",
  authors: [EM, AnMe, LM],
  journal: "XIII Mediterranean Conference on Medical and Biological Engineering and Computing 2013",
  date: "2014",
  link: "https://link.springer.com/chapter/10.1007/978-3-319-00846-2_55",
  type: "conference",
  tags: [],
    image: "assets/dalle/22.png",
  download: undefined,
  DOI: null
},
{
  id: 23,
  title: "Coronary stenting: From optical coherence tomography to fluid dynamic simulations",
  abstract: "The presence of stents within coronary arteries alters the hemodynamic condition. Computational fluid dynamics (CFD) simulations offer the possibility to study local hemodynamics of a stented artery to identify the stimuli of instent restenosis, i.e. the local reduction of lumen size after stent deployment. The results of CFD simulations are more accurate when the analyses are performed with a model reproducing real in vivo conditions. For this purpose, optical coherence tomography (OCT) is a promising tool to reconstruct 3D geometries of stented coronary arteries, due to its higher resolution compared to the other imaging techniques. In the present work a reconstruction method of stented coronary bifurcation geometrical models starting from OCT images was developed. An OCT exam performed in a stented coronary bifurcation silicone sample was considered. The vessel and the stent were reconstructed separately, and then they were merged together. Vessel reconstruction was performed with a semi-automatic process: the main branch was reconstructed by fitting the lumen boundary with ellipses and subsequently by creating a mesh of the vessel; the side branch was created like an ideal cylinder. Stent struts were identified with an automatic algorithm; then, the stent was reconstructed in a manual way. After the creation of the 3D geometry of the bifurcation, a transient fluid dynamic simulation was carried out. CFD results showed that the highest risk of restenosis is located in the region near the bifurcation.",
  authors: [ClCh, EM, FrBu, LM, FM],
  journal: "13th IEEE International Conference on BioInformatics and BioEngineering",
  date: "2013",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/26736411",
  type: "conference",
  tags: [],
    image: "assets/dalle/23.png",
  download: undefined,
  DOI: null
},
{
  id: 24,
  title: "Whole-body diffusion-weighted magnetic resonance is superior to skeletal X-ray and magnetic resonance of the spine for the assessment of bone disease in multiple myeloma",
  abstract: "Bone disease in multiple myeloma (MM) is routinely assessed by skeletal X-ray (XR) and magnetic resonance of the spine (S-MRI). Diffusion- weighted MRI (DW-MRI) is a functional MRI that detects the changes of water diffusion through cells. This prospective, non-randomized, monocentric phase II study aimed at comparing whole-body DWMRI with XR and S-MRI for the assessment of MM bone lesions. Thirty- six consecutive symptomatic patients at diagnosis or at relapse performed XR, S-MRI, whole-body MRI, and whole-body DW-MRI before treatment, after treatment, and 6 months after the end of the treatment. MRI exams were performed in a single session, and clinical, laboratory and bone marrow evaluations were done at each time point. A substudy evaluated 12 asymptomatic patients at diagnosis, after 6 and 12 months. Radiology exams were independently read by 3 radiologists experienced in MM, and the techniques were compared by the count of segments with focal lesions (FL) (>=5 mm). Diffusion-weighted MRI significantly detected more segments with FL than XR (p=0.01) and SMRI (p=0.02) through all timepoints. After treatment, the DW-MRI and S-MRI detected a significant change of FL consistent with response (p=0.04 for both techniques), whereas XR did not (0.55). Having >4 segments with FL by DW-MRI before treatment predicted a worse progression free survival (PFS, p=0.02) and relapse incidence (p<0.01). In Cox multivariate analysis adjusted for ISS stage, DW-MRI before treatment significantly predicted PFS (p<0.01). After treatment, a positive DW-MRI exam predicted a 3-year 83% relapse risk, and was associated with a worse PFS (p=0.01) and relapse incidence (p=0.01). Diffusionweighted MRI was superior to whole-body MRI through all time points (p<0.01). The substudy of asymptomatic patients showed that DWMRI is superior to XR (p<0.01) and similar to S-MRI (p=0.47). In conclusion, diffusion-weighted MRI is superior to XR and S-MRI in detecting FL in MM and before treatments predicts PFS and relapse. The findings of DW-MRI after treatment correlate with response and are predictive of PFS and relapse.",
  authors: [FrSp, PP, GiTr, EM, ViMo, AlLa, LuMa, PaPa, LM, PaCo],
  journal: "Haematologica (2012)",
  date: "2013",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/26736411",
  type: "conference",
  tags: [],
    image: "assets/dalle/24.png",
  download: undefined,
  DOI: null
},
{
  id: 25,
  title: "Results of a Prospective Study Comparing Whole-Body Diffusion-Weighted Magnetic Resonance Imaging with Skeletal X-Ray and Magnetic Resonance of the Spine for Assessing Bone Disease in Multiple Myeloma",
  abstract: "Standard assessment of bone disease in multiple myeloma (MM) is based on skeletal X-ray (XR) and magnetic resonance (MR) of the spine (MRS). Diffusion-weighted MR (DW-MR) is a novel functional MR that detects changes of water diffusion through cells in tissues. To assess the value of DW-MR to detect bone lesions in MM, we designed a prospective study comparing whole-body DW-MR with XR and MRS. The study included symptomatic patients (pts) at diagnosis or at relapse before the start of the treatment; they performed XR, MRS, conventional whole-body MR (WB-MR), and whole-body DW-MR at enrolment (time point 1, T1), after treatment (T2), and after 6 months of follow-up (T3). Clinical and hematologic, including bone marrow (BM), disease evaluations were done at the same time points. The study was approved by the Institutional Review Board in 2008 (protocol 44/08). Methods: The primary objective was to assess whether DW-MR could detect more focal lesions (FL) than XR and MRS. Secondary objectives were to correlate the changes of FL detected by DW-MR with response, to assess the prognostic value of DW-MR, and to compare DW-MR with WB-MR. MRS, WB-MR and DW-MR were done in a single 45-minute session on a standard 1.5 Tesla MR scanner. DW-MR consisted of multiple stacked axial Echo Planar Imaging sequences at 4 b-values, evaluated by PET-like Maximum Intensity Projection and Multi-Planar reconstructions at the highest b-value (1000). Each exam was independently read by 3 radiologists experienced in MM. 53 bone segments per exam were evaluated in whole-body imaging (XR, WB-MR and DW-MR); 25 segments were evaluated in spine imaging (MRS and DW-MR). All the patterns (focal, diffuse, mixed, and salt-and-pepper) of bone lesions were recorded. Matching FL detected by >=2 radiologists were counted for the present analysis. Statistics were carried out with the Wilcoxon signed rank test for methods comparisons and the Kruskal-Wallis test to assess intra-patient changes through the time points. Survival and relapse were analyzed by Kaplan-Meier and Cumulative Incidence method with log-rank and Gray's tests. All tests were 2-sided. Results: Between 2008 and 2010, 36 symptomatic pts were enrolled: 43% were at diagnosis, 57% at relapse; 71% of pts had ISS stage 1 MM. The most frequent isotype was IgG (57%), median BM infiltration was 30%. FISH on selected CD138+ plasma cells detected t(4;14) and del(17) in 9 and 6% of pts. At T1, the DW-MR detected more FL than standard XR (306 vs 117 FL, p<0.01), WB-MR (306 vs 225 FL, p=0.02), and MRS (165 vs 116 FL, trend, p=0.08). At T2, a similar number of FL was detected by DW-MR and XR (97 vs 104 FL, p=0.99) and MRS (20 vs 20 FL, p=1.00); DW-MR detected more FL than WB-MR (97 vs 60 FL, p=0.01). At T3, the DW-MR detected more FL than WB-MR (88 vs 45 FL, p<0.01) and MRS (24 vs 11 FL, p=0.05), and similar FL compared to XR (88 vs 62 FL, p=0.27). Considering all the time points, the DW-MR detected more FL than XR (p=0.01), WB-MR (p<0.01) and MRS (p=0.02). Between T1 and T2, all pts were treated with IMIDS or bortezomib–based regimens, 33% underwent a stem cell transplant. Overall response rate (ORR) was 73%. DW-MR detected significant changes of FL according to disease response at T2 (from 79 to 15 FL in >=VGPR, from 69 to 27 in PR, and from 34 to 55 FL in SD or PD, p=0.04 [whole body]; p=0.02 [spine]). Also MRS consistently detected response (p=0.04), whereas WB-MR showed only a weak correlation (p=0.13); XR did not detect response (p=0.55). Between T2 and T3, pts had minor changes of disease status (72% ORR), and, accordingly, all the radiological exams did not show significant changes in FL. One-, 2- and 3-year progression-free survival (PFS) was 80, 62 and 37% (median, 30 months), OS was 88, 79 and 76% (median not reached), and relapse incidence was 15, 32, and 54% (median, 21 months). Since the median number of FL detected by DW-MR at T1 was 4 (range, 0–49 FL), we compared PFS, relapse, and OS by the presence of <=4 FL or >4 FL before treatment. Patients with <=4 FL at DW-MR had better PFS (72 vs 50% at 2 years, p=0.02) and less relapse incidence (17 vs 50%, p<0.01) than those with >4 FL, whereas OS was not different (84 vs 75%, p=0.76). Conclusions: DW-MR is superior to XR, MRS, and WB-MR in detecting FL in MM. The number of FL detected by DW-MR before treatment predicts PFS and relapse incidence. DW-MR is a functional imaging that effectively detects the bone disease changes according to treatment response and can be used to monitor disease response.",
  authors: [FrSp, PP, GiTr, EM, ViMo, AlLa, LuMa, PaPa, LM, PaCo],
  journal: "The Journal of the American Society of Hematology Blood (2012)",
  date: "2013",
  link: "https://ashpublications.org/blood/article/120/21/2913/102443/Results-of-a-Prospective-Study-Comparing-WholeBody",
  type: "conference",
  tags: [],
    image: "assets/dalle/25.png",
  download: undefined,
  DOI: "10.1182/blood-2012-03-415367"
},
{
  id: 26,
  title: "A registration framework for evaluation of T1, T2 and DWI signal intensities in multiple myeloma",
  abstract: "Objective: In this study we point out the Diffusion-Weighted Imaging (DWI) role in the diagnosis of multiple myeloma (MM), comparing its signal values (SV) (Sommer et al., 2010) with the standard imaging modalities T1, T2. We further evaluate how SV change in relation with the percentage of plasma cells infiltration evaluated through bone marrow biopsy (BMB). Methods: Since March 2008 23 patients with average age of 61 (± 11) years old, 11 females and 12 males, have been investigated before their own therapy with a whole body MRI protocol, concerning a whole body T1, a whole body T2 and a whole body DWI and a BMB. An experienced radiologist defined for each patient two volume of interests (VOIs): onto the main lesions and on healthy bones (Femur and Homerus). After that, we have subdivided the full population by a clinical threshold of 25% on cells infiltration percentage; then, we analysed statistical differences in the 2 groups (A, B). Results: We found out that DWI voxels intensities in group A (infiltration ≤ 25%) were higher than group B, this gap had to be considered statistically different (P ≤ 0.05).",
  authors: [EM, PP, LM],
  journal: "BIOSIGNALS 2012 - Proceedings of the International Conference on Bio-Inspired Systems and Signal Processing",
  date: "2012",
  link: "https://moh-it.pure.elsevier.com/en/publications/a-registration-framework-for-evaluation-of-t1-t2-and-dwi-signal-i",
  type: "conference",
  tags: [],
    image: "assets/dalle/26.png",
  download: "https://scitepress.org/papers/2012/37775/37775.pdf",
  DOI: null
},
{
  id: 27,
  title: "Quantitative characterization and identification of lymph nodes and Nasopharingeal Carcinoma by coregistered magnetic resonance images",
  abstract: "In this study we developed a technique to improve the identification of carcinoma and pathological lymph nodes in cases of Nasopharingeal Carcinoma (NPC), through a quantitative characterization of the tissues based on MR images: 3D VIBE (Volumetric Interpolated Breath-hold Examination) T1-CE (Contrast Enhanced), T1, T2 and Diffusion Weighted Imaging (DWI) for b-values 0,300,500,700,1000. The procedure included two phases: 1) coregistration of volumes and 2) tissue characterization. Concerning the first phase, the DICOM images were reassembled spatially and resampled with isotropic 0.5mm resolution. Coregistration was performed by two multiresolution rigid transformations, merging head and neck volumes, plus a final multiresolution non rigid transformation. The anatomical 3D CE-VIBE volume was taken as reference. The procedure for tissue characterization is semi automated and it required a radiologist to identify an example of tissue from the primary tumor and a metastatic lymph node. We generated a 8-dimensional membership function to perform a fuzzy-like identification of these tissues. The result of this procedure was the generation of two maps, which showed complementary characterization of lymph nodes and carcinoma. A few example will be shown to evidence the potentiality of this method in identification and characterization of NPC lesions.",
  authors: [FaVe, EM, LM, PP],
  journal: "Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
  date: "2012",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/23367133",
  type: "conference",
  tags: [],
    image: "assets/dalle/27.png",
  download: undefined,
  DOI: null
},
{
  id: 28,
  title: "An effective 3D segmentation method for sinonasal cancer in response to chemoterapy",
  abstract: "Intestinal-Type AdenoCarcinomas (ITAC) arise in the nasal cavity and ethmoid. They frequently have irregular morphology and are adjacent to complex anatomical structures (Figures 1-3). Tumor volume cannot be easily assessed. Response criteria to chemotherapy and/or radiotherapy, either two dimensional (2D) [WHO] or one dimensional (1D) [RECIST] are difficult to apply to tumors of the head & neck, because of irregular shape, morphology and extent. Accurate tumor segmentation to evaluate changes in size and volume is usually performed manually by radiologists. Developing a semi-supervised algorithm could prove an effective and time-sparing alternative. The aim of our study was to develop a semi-supervised segmentation algorithm for magnetic resonance images (MRI) to extract dimensions, boundaries and volumes of neoplastic lesions. We evaluated its applicability and performance in ITAC masses of the ethmoid and nasal cavities comparing volumetric results obtained by manual segmentation to algorithm segmentation.",
  authors: [PP, KaPa, LuBr, EM, DaVe, LM],
  journal: "European Society of Radiology March 4-8 2010 Vienna, Austria",
  date: "2010",
  link: "https://epos.myesr.org/esr/viewing/index.php?module=viewing_poster&task=&pi=101103",
  type: "conference",
  tags: [],
    image: "assets/dalle/28.png",
  download: "https://epos.myesr.org/esr/viewing/index.php?module=viewing_posteraction&task=downloadpdf&pi=101103",
  DOI: null
},
{
  id: 28.1,
  title: "An efficient and effective segmentation software to investigate the apparent diffusion coefficient in multiple myeloma lesions.",
  abstract: "",
  authors: [EM, PP, LM],
  journal: "II Congresso Nazionale di Bioingegneria, 2010",
  date: "2010",
  link: "https://re.public.polimi.it/handle/11311/580342#.YMJzCZpKikA",
  type: "conference",
  tags: [],
    image: "assets/dalle/28.1.png",
  download: undefined,
  DOI: null
},
{
  id: 28.2,
  title: "Whole-body DWI, whole-body and whole-spine MRI in multiple myeloma",
  abstract: "",
  authors: [PP, FrSp, EM, LM, ViMo],
  journal: "European Congress of Radiology-ECR 2010",
  date: "2010",
  link: "https://re.public.polimi.it/handle/11311/580342#.YMJzCZpKikA",
  type: "conference",
  tags: [],
    image: "assets/dalle/28.2.png",
  download: undefined,
  DOI: null
},
{
  id: 28.3,
  title: "WHOLE-BODY DIFFUSION MRI AND SKELETAL LESIONS IN THYROID CANCER: DIAGNOSTIC AND THERAPEUTIC IMPLICATIONS",
  abstract: "Forty-fifty percent of the patients with metastatic TC suffer from bone metastases. 99mTc scintigraphy is employed to assess bone lesions although it lacks accuracy, mostly in lytic lesions of differentiated thyroid cancer (DTC). CT scan has a sensitivity of 71-100% while data on the accuracy of 18F-FDG-PET/CT are scanty. MRI captures both bone and bone marrow involvement, more common in medullary thyroid cancer (MTC). Whole body MRI (WB) and whole-body diffusion (WB-DWI) are emerging as accurate tools for detection and therapy monitoring of bone metastases. We investigated the role of WB and WB-DWI in bone lesions from TC: (i) sensitivity and specificity; (ii) evaluation of response during TKIs.",
  authors: [LaLo, FrSp, RGr, AGi, ECi, PaBo, EM, LL],
  journal: "European Thyroid Journal",
  date: "2010",
  link: "https://www.sciencedirect.com/science/article/pii/S0923753420336073",
  type: "conference",
  tags: [],
    image: "assets/dalle/28.3.png",
  download: undefined,
  DOI: null
},
{
  id: 29,
  title: "Exploring cortical attentional system by using fMRI during a continuous perfomance test",
  abstract: "Functional magnetic resonance imaging (fMRI) was performed in eight healthy subjects to identify the localization, magnitude, and volume extent of activation in brain regions that are involved in blood oxygen level-dependent (BOLD) response during the performance of Conners' Continuous Performance Test (CPT). An extensive brain network was activated during the task including frontal, temporal, and occipital cortical areas and left cerebellum. The more activated cluster in terms of volume extent and magnitude was located in the right anterior cingulate cortex (ACC). Analyzing the dynamic trend of the activation in the identified areas during the entire duration of the sustained attention test, we found a progressive decreasing of BOLD response probably due to a habituation effect without any deterioration of the performances. The observed brain network is consistent with existing models of visual object processing and attentional control and may serve as a basis for fMRI studies in clinical populations with neuropsychological deficits in Conners' CPT performance.",
  authors: [MaTa, EM, SeCe, AnBi],
  journal: "Computational Intelligence and Neuroscience",
  date: "2009",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/20011033",
  type: "article",
  tags: [],
    image: "assets/dalle/29.png",
  download: "https://downloads.hindawi.com/journals/cin/2010/329213.pdf",
  DOI: "10.1155/2010/329213"
},
{
  id: 30,
  title: "A web-based tool for cooperating behaviors in eating and physical activity control.",
  abstract: "The field of information technology and the Internet for health care has developed rapidly in the last few years. Furthermore, new services devoted to improve personalized healthcare are emerging from current web-orientated research. Control of eating and physical activity behaviors can be performed in a computer mediated way as a social networking application. To this purpose, we designed and implemented a web application based on the cooperation between two communities: Patients and Nutritionists. The patients are able to cooperate as within a self-help group, while nutritionists can guide patients struggling with incorrect lifestyle and its consequences.",
  authors: [StBo, YlPr, SeMa, EM, FePa, MaMas, FrPi],
  journal: "ANNUAL REVIEW OF CYBERTHERAPY AND TELEMEDICINE 2009: ADVANCED TECHNOLOGIES IN THE BEHAVIORAL, SOCIAL AND NEUROSCIENCES",
  date: "2009",
  link: "https://psycnet.apa.org/record/2009-17266-037",
  type: "article",
  tags: [],
    image: "assets/dalle/30.png",
  download: "https://issuu.com/bepperiva/docs/arctt_2009/168",
  DOI: null
},
{
  id: 31,
  title: "A web-based tool for cooperating behaviors in eating and physical activity control.",
  abstract: "The field of information technology and the Internet for health care has developed rapidly in the last few years. Furthermore, new services devoted to improve personalized healthcare are emerging from current web-orientated research. Control of eating and physical activity behaviors can be performed in a computer mediated way as a social networking application. To this purpose, we designed and implemented a web application based on the cooperation between two communities: Patients and Nutritionists. The patients are able to cooperate as within a self-help group, while nutritionists can guide patients struggling with incorrect lifestyle and its consequences.",
  authors: [StBo, YlPr, SeMa, EM, FePa, MaMas, FrPi],
  journal: "Studies in Health Technology and Informatics",
  date: "2009",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/19592754",
  type: "article",
  tags: [],
    image: "assets/dalle/31.png",
  download: undefined,
  DOI: null
}
];
