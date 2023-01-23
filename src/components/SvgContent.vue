<template>
  <component v-bind:is="svg | addlogo"></component>
</template>

<script>
//bathroom
import HansgroheLogo from '@/components/logo/HansgroheLogo.vue'
import AxorLogo from '@/components/logo/AxorLogo.vue'
import GeberitLogo from '@/components/logo/GeberitLogo.vue'
import NicolazziLogo from '@/components/logo/NicolazziLogo.vue'
import VilleroybochLogo from '@/components/logo/VilleroyBochLogo.vue'
import TotoLogo from '@/components/logo/TotoLogo.vue'
import GessiLogo from '@/components/logo/GessiLogo.vue'
import MiaitaliaLogo from '@/components/logo/MiaitaliaLogo.vue'
import MargaroliLogo from '@/components/logo/MargaroliLogo.vue'
import GaiaLogo from '@/components/logo/GaiaLogo.vue'
import EurodesignLogo from '@/components/logo/EurodesignLogo.vue'
import VismaravetroLogo from '@/components/logo/VismaravetroLogo.vue'
import HueppeLogo from '@/components/logo/HueppeLogo.vue'
import CieloLogo from '@/components/logo/CieloLogo.vue'
import RavakLogo from '@/components/logo/RavakLogo.vue'
import ArtceramLogo from '@/components/logo/ArtceramLogo.vue'
import AntoniolupiLogo from '@/components/logo/AntoniolupiLogo.vue'
import ThgparisLogo from '@/components/logo/ThgparisLogo.vue'
import DuravitLogo from '@/components/logo/DuravitLogo.vue'
import BagnodesignLogo from '@/components/logo/BagnodesignLogo.vue'
import FerplastLogo from '@/components/logo/FerplastLogo.vue'
import StilhausLogo from '@/components/logo/StilhausLogo.vue'
import JobstLogo from '@/components/logo/JobstLogo.vue'
import DevondevonLogo from '@/components/logo/DevondevonLogo.vue'
import AquamarinaLogo from '@/components/logo/AquamarinaLogo.vue'
import IdeagroupLogo from '@/components/logo/IdeagroupLogo.vue'
import GlassdesignLogo from '@/components/logo/GlassdesignLogo.vue'
import OasisLogo from '@/components/logo/OasisLogo.vue'
import TeceLogo from '@/components/logo/TeceLogo.vue'
import MalettiLogo from '@/components/logo/MalettiLogo.vue'
//spa & wellness
import EffegibiLogo from '@/components/logo/EffegibiLogo.vue'
import TreesseLogo from '@/components/logo/TreesseLogo.vue'
import KlafsLogo from '@/components/logo/KlafsLogo.vue'
import TyloLogo from '@/components/logo/TyloLogo.vue'
import JacuzziLogo from '@/components/logo/JacuzziLogo.vue'
import TechnogymLogo from '@/components/logo/TechnogymLogo.vue'
import NiloLogo from '@/components/logo/NiloLogo.vue'
//floor coverings - tiles
import SicisLogo from '@/components/logo/SicisLogo.vue'
import MutaformaLogo from '@/components/logo/MutaformaLogo.vue'
import AntoliniLogo from '@/components/logo/AntoliniLogo.vue'
import MathiosstoneLogo from '@/components/logo/MathiosstoneLogo.vue'
import PetraantiquaLogo from '@/components/logo/PetraantiquaLogo.vue'
import ImolaceramicaLogo from '@/components/logo/ImolaceramicaLogo.vue'
import AtlasconcordeLogo from '@/components/logo/AtlasconcordeLogo.vue'
import LafabbricaLogo from '@/components/logo/LafabbricaLogo.vue'
import MirageLogo from '@/components/logo/MirageLogo.vue'
import PetracersLogo from '@/components/logo/PetracersLogo.vue'
import WeitzerLogo from '@/components/logo/WeitzerLogo.vue'
//furniture
import AgostiniLogo from '@/components/logo/AgostiniLogo.vue'
import BertiparquetLogo from '@/components/logo/BertiparquetLogo.vue'
import CpparquetLogo from '@/components/logo/CpparquetLogo.vue'
import FogliedoroLogo from '@/components/logo/FogliedoroLogo.vue'
import HaroLogo from '@/components/logo/HaroLogo.vue'
import BaxterLogo from '@/components/logo/BaxterLogo.vue'
import ArketipoLogo from '@/components/logo/ArketipoLogo.vue'
import CattelanitaliaLogo from '@/components/logo/CattelanitaliaLogo.vue'
import PregnoLogo from '@/components/logo/PregnoLogo.vue'
import DitreitaliaLogo from '@/components/logo/DitreitaliaLogo.vue'
import TwilsLogo from '@/components/logo/TwilsLogo.vue'
import DolfiLogo from '@/components/logo/DolfiLogo.vue'
import BrunozampaLogo from '@/components/logo/BrunozampaLogo.vue'
import GiorgiocasaLogo from '@/components/logo/GiorgiocasaLogo.vue'
import TumideiLogo from '@/components/logo/TumideiLogo.vue'
import VisionnaireLogo from '@/components/logo/VisionnaireLogo.vue'
import UnopiuLogo from '@/components/logo/UnopiuLogo.vue'
import ArredoclassicLogo from '@/components/logo/ArredoclassicLogo.vue'
import CiprianiLogo from '@/components/logo/CiprianiLogo.vue'
import BentleyLogo from '@/components/logo/BentleyLogo.vue'
import CalligarisLogo from '@/components/logo/CalligarisLogo.vue'
import RosiniLogo from '@/components/logo/RosiniLogo.vue'
import VolpiLogo from '@/components/logo/VolpiLogo.vue'
import EformaLogo from '@/components/logo/EformaLogo.vue'
import LaskasasLogo from '@/components/logo/LaskasasLogo.vue'
import GiorgiocollectionLogo from '@/components/logo/GiorgiocollectionLogo.vue'
import TurriLogo from '@/components/logo/TurriLogo.vue'
import PiancaLogo from '@/components/logo/PiancaLogo.vue'
import FaveroLogo from '@/components/logo/FaveroLogo.vue'
import SantaluciaLogo from '@/components/logo/SantaluciaLogo.vue'
import FendiLogo from '@/components/logo/FendiLogo.vue'
import GibusLogo from '@/components/logo/GibusLogo.vue'
import EmuLogo from '@/components/logo/EmuLogo.vue'
import NardiLogo from '@/components/logo/NardiLogo.vue'
import AtmospheraLogo from '@/components/logo/AtmospheraLogo.vue'
import EstelLogo from '@/components/logo/EstelLogo.vue'
import LasLogo from '@/components/logo/LasLogo.vue'
//kitchen
import AstercucineLogo from '@/components/logo/AstercucineLogo.vue'
import VenetacucineLogo from '@/components/logo/VenetacucineLogo.vue'
import ValcucineLogo from '@/components/logo/ValcucineLogo.vue'
import PrestigeLogo from '@/components/logo/PrestigeLogo.vue'
import KueppersbuschLogo from '@/components/logo/KueppersbuschLogo.vue'
import FrankeLogo from '@/components/logo/FrankeLogo.vue'
import ElectroluxLogo from '@/components/logo/ElectroluxLogo.vue'
import AegLogo from '@/components/logo/AegLogo.vue'
import ZanussiLogo from '@/components/logo/ZanussiLogo.vue'
//lightning
import FaroLogo from '@/components/logo/FaroLogo.vue'
import DeltalightLogo from '@/components/logo/DeltalightLogo.vue'
import FlosLogo from '@/components/logo/FlosLogo.vue'
import ItalampLogo from '@/components/logo/ItalampLogo.vue'
import MasieroLogo from '@/components/logo/MasieroLogo.vue'
import FedeLogo from '@/components/logo/FedeLogo.vue'
import JungLogo from '@/components/logo/JungLogo.vue'
import LegrandLogo from '@/components/logo/LegrandLogo.vue'
import PatriziagargantiLogo from '@/components/logo/PatriziagargantiLogo.vue'
import JisoLogo from '@/components/logo/JisoLogo.vue'
import LodesLogo from '@/components/logo/LodesLogo.vue'
import PentaLogo from '@/components/logo/PentaLogo.vue'
//windows doors
import AdlporteLogo from '@/components/logo/AdlporteLogo.vue'
import VenusdesignLogo from '@/components/logo/VenusdesignLogo.vue'
import FasserramentiLogo from '@/components/logo/FasserramentiLogo.vue'
import NewdesignporteLogo from '@/components/logo/NewdesignporteLogo.vue'
import RimadesioLogo from '@/components/logo/RimadesioLogo.vue'
import SalicepaoloLogo from '@/components/logo/SalicepaoloLogo'
import BarausseLogo from '@/components/logo/BarausseLogo'
import VeluxLogo from '@/components/logo/VeluxLogo'
//decor & accesories
import LondonartLogo from '@/components/logo/LondonartLogo.vue'
import EdgLogo from '@/components/logo/EdgLogo.vue'
import WalldecoLogo from '@/components/logo/WalldecoLogo.vue'
import MapeiLogo from '@/components/logo/MapeiLogo.vue'
import LoloeyLogo from '@/components/logo/LoloeyLogo.vue'
import BubenzorwegLogo from '@/components/logo/BubenzorwegLogo.vue'
import DedarLogo from '@/components/logo/DedarLogo.vue'
import EichholtzLogo from '@/components/logo/EichholtzLogo.vue'
import IbiagiLogo from '@/components/logo/IbiagiLogo.vue'
import MohebbanLogo from '@/components/logo/MohebbanLogo.vue'
import MurattoLogo from '@/components/logo/MurattoLogo.vue'
import BauxLogo from '@/components/logo/BauxLogo.vue'
import StudioartLogo from '@/components/logo/StudioartLogo.vue'
//construction
import FontanagrandeLogo from '@/components/logo/FontanagrandeLogo.vue'
import ProgressLogo from '@/components/logo/ProgressLogo.vue'
import ProfilpasLogo from '@/components/logo/ProfilpasLogo.vue'
import TegolaLogo from '@/components/logo/TegolaLogo.vue'
import IrisfmgLogo from '@/components/logo/IrisfmgLogo.vue'
//fireplaces
import BiokaminoLogo from '@/components/logo/BiokaminoLogo.vue'
import DimplexLogo from '@/components/logo/DimplexLogo.vue'
//heater & cooling
import JagaLogo from '@/components/logo/JagaLogo.vue'
import DaikinLogo from '@/components/logo/DaikinLogo.vue'
import ZehnderLogo from '@/components/logo/ZehnderLogo.vue'

export default {
  name: 'SvgContent',
  props: ['svg'],
  filters: {
    addlogo(l) {
      return l = l+'Logo';
    }
  },
  components: {
    AgostiniLogo,
    HansgroheLogo,
    AxorLogo,
    GeberitLogo,
    NicolazziLogo,
    VilleroybochLogo,
    TotoLogo,
    GessiLogo,
    MiaitaliaLogo,
    MargaroliLogo,
    GaiaLogo,
    EurodesignLogo,
    VismaravetroLogo,
    HueppeLogo,
    CieloLogo,
    RavakLogo,
    ArtceramLogo,
    AntoniolupiLogo,
    ThgparisLogo,
    DuravitLogo,
    BagnodesignLogo,
    FerplastLogo,
    StilhausLogo,
    JobstLogo,
    DevondevonLogo,
    AquamarinaLogo,
    IdeagroupLogo,
    GlassdesignLogo,
    OasisLogo,
    TeceLogo,
    MalettiLogo,
    EffegibiLogo,
    TreesseLogo,
    KlafsLogo,
    TyloLogo,
    JacuzziLogo,
    TechnogymLogo,
    NiloLogo,
    SicisLogo,
    MutaformaLogo,
    AntoliniLogo,
    MathiosstoneLogo,
    PetraantiquaLogo,
    ImolaceramicaLogo,
    AtlasconcordeLogo,
    LafabbricaLogo,
    MirageLogo,
    PetracersLogo,
    WeitzerLogo,
    BertiparquetLogo,
    CpparquetLogo,
    FogliedoroLogo,
    HaroLogo,
    BaxterLogo,
    ArketipoLogo,
    CattelanitaliaLogo,
    PregnoLogo,
    DitreitaliaLogo,
    TwilsLogo,
    DolfiLogo,
    BrunozampaLogo,
    GiorgiocasaLogo,
    TumideiLogo,
    VisionnaireLogo,
    UnopiuLogo,
    ArredoclassicLogo,
    CiprianiLogo,
    BentleyLogo,
    CalligarisLogo,
    RosiniLogo,
    VolpiLogo,
    EformaLogo,
    LaskasasLogo,
    GiorgiocollectionLogo,
    TurriLogo,
    PiancaLogo,
    FaveroLogo,
    SantaluciaLogo,
    FendiLogo,
    GibusLogo,
    EmuLogo,
    NardiLogo,
    AtmospheraLogo,
    EstelLogo,
    LasLogo,
    AstercucineLogo,
    VenetacucineLogo,
    ValcucineLogo,
    PrestigeLogo,
    KueppersbuschLogo,
    FrankeLogo,
    ElectroluxLogo,
    AegLogo,
    ZanussiLogo,
    FaroLogo,
    DeltalightLogo,
    FlosLogo,
    ItalampLogo,
    MasieroLogo,
    FedeLogo,
    JungLogo,
    LegrandLogo,
    PatriziagargantiLogo,
    JisoLogo,
    LodesLogo,
    PentaLogo,
    AdlporteLogo,
    VenusdesignLogo,
    FasserramentiLogo,
    NewdesignporteLogo,
    RimadesioLogo,    
    SalicepaoloLogo,
    BarausseLogo,
    VeluxLogo,
    LondonartLogo,
    EdgLogo,
    WalldecoLogo,
    MapeiLogo,
    LoloeyLogo,
    BubenzorwegLogo,
    DedarLogo,
    EichholtzLogo,
    IbiagiLogo,
    MohebbanLogo,
    MurattoLogo,
    BauxLogo,
    StudioartLogo,
    FontanagrandeLogo,
    ProgressLogo,
    ProfilpasLogo,
    TegolaLogo,
    IrisfmgLogo,
    BiokaminoLogo,
    DimplexLogo,
    JagaLogo,
    DaikinLogo,
    ZehnderLogo,
  }
}
</script>