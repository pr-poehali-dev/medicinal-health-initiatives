import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все препараты', icon: 'Pill' },
    { id: 'cold', name: 'Простуда и грипп', icon: 'Thermometer' },
    { id: 'pain', name: 'Обезболивающие', icon: 'Activity' },
    { id: 'vitamins', name: 'Витамины', icon: 'Heart' },
    { id: 'prescription', name: 'Рецептурные', icon: 'FileText' },
  ];

  const products = [
    {
      id: 1,
      name: 'Парацетамол',
      category: 'pain',
      price: 89,
      description: 'Жаропонижающее и обезболивающее средство',
      prescription: false,
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/acab625c-bead-4432-8a2f-1a7f506f3615/files/0dbc0e33-300f-43ac-b6aa-20f82f3cd556.jpg',
    },
    {
      id: 2,
      name: 'Витамин D3',
      category: 'vitamins',
      price: 450,
      description: 'Поддержка иммунитета и здоровья костей',
      prescription: false,
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/acab625c-bead-4432-8a2f-1a7f506f3615/files/0dbc0e33-300f-43ac-b6aa-20f82f3cd556.jpg',
    },
    {
      id: 3,
      name: 'Амоксициллин',
      category: 'prescription',
      price: 320,
      description: 'Антибиотик широкого спектра действия',
      prescription: true,
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/acab625c-bead-4432-8a2f-1a7f506f3615/files/0dbc0e33-300f-43ac-b6aa-20f82f3cd556.jpg',
    },
    {
      id: 4,
      name: 'Ибупрофен',
      category: 'pain',
      price: 120,
      description: 'Противовоспалительное и обезболивающее',
      prescription: false,
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/acab625c-bead-4432-8a2f-1a7f506f3615/files/0dbc0e33-300f-43ac-b6aa-20f82f3cd556.jpg',
    },
    {
      id: 5,
      name: 'Терафлю',
      category: 'cold',
      price: 380,
      description: 'Комплексное средство от простуды',
      prescription: false,
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/acab625c-bead-4432-8a2f-1a7f506f3615/files/0dbc0e33-300f-43ac-b6aa-20f82f3cd556.jpg',
    },
    {
      id: 6,
      name: 'Омега-3',
      category: 'vitamins',
      price: 890,
      description: 'Полиненасыщенные жирные кислоты',
      prescription: false,
      inStock: true,
      image: 'https://cdn.poehali.dev/projects/acab625c-bead-4432-8a2f-1a7f506f3615/files/0dbc0e33-300f-43ac-b6aa-20f82f3cd556.jpg',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Plus" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-foreground">ЗдравАптека</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">
                Каталог
              </a>
              <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">
                Доставка
              </a>
              <a href="#consultation" className="text-sm font-medium hover:text-primary transition-colors">
                Консультация
              </a>
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                8 800 555-35-35
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Лекарства с доставкой на дом
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Быстрая доставка лекарств за 2-4 часа. Более 15 000 препаратов в наличии
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск по названию препарата..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 shadow-lg"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="rounded-full"
                >
                  <Icon name={cat.icon} size={16} className="mr-2" />
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Каталог препаратов</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden bg-secondary/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    {product.prescription && (
                      <Badge variant="secondary" className="ml-2">
                        <Icon name="FileText" size={12} className="mr-1" />
                        Рецепт
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Package" size={16} />
                    <span>{product.inStock ? 'В наличии' : 'Под заказ'}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{product.price} ₽</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">Препараты не найдены</p>
              <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      <section id="delivery" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center text-foreground">Условия доставки</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">Быстрая доставка</h4>
                <p className="text-muted-foreground text-sm">2-4 часа по городу</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">Бесплатно</h4>
                <p className="text-muted-foreground text-sm">При заказе от 1000 ₽</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">Удобно</h4>
                <p className="text-muted-foreground text-sm">Доставка в любую точку</p>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <Tabs defaultValue="courier" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="courier">Курьером</TabsTrigger>
                    <TabsTrigger value="pickup">Самовывоз</TabsTrigger>
                  </TabsList>
                  <TabsContent value="courier" className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Доставка за 2-4 часа</p>
                        <p className="text-sm text-muted-foreground">Выберите удобное время доставки</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Стоимость: 150 ₽</p>
                        <p className="text-sm text-muted-foreground">Бесплатно при заказе от 1000 ₽</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Оплата при получении</p>
                        <p className="text-sm text-muted-foreground">Наличными или картой курьеру</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="pickup" className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Готовность через 30 минут</p>
                        <p className="text-sm text-muted-foreground">Соберем заказ после оформления</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">15 аптек по городу</p>
                        <p className="text-sm text-muted-foreground">Выберите ближайшую при оформлении</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Бесплатно</p>
                        <p className="text-sm text-muted-foreground">Без дополнительных платежей</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-center text-foreground">Консультация фармацевта</h3>
            <p className="text-center text-muted-foreground mb-12">
              Наши специалисты помогут подобрать препараты и ответят на ваши вопросы
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/acab625c-bead-4432-8a2f-1a7f506f3615/files/f460cf61-e682-444b-88f5-ed69b5e67240.jpg"
                    alt="Консультация"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Онлайн-консультация</CardTitle>
                  <CardDescription>Свяжитесь с фармацевтом прямо сейчас</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Начать чат
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Частые вопросы</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Как заказать рецептурные препараты?</AccordionTrigger>
                      <AccordionContent>
                        Для заказа рецептурных препаратов необходимо загрузить фото рецепта при оформлении заказа.
                        Наш фармацевт проверит документ и свяжется с вами.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Какие способы оплаты доступны?</AccordionTrigger>
                      <AccordionContent>
                        Вы можете оплатить заказ при получении наличными или картой курьеру, а также онлайн при
                        оформлении заказа.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Можно ли вернуть препараты?</AccordionTrigger>
                      <AccordionContent>
                        Согласно законодательству, лекарственные препараты надлежащего качества возврату не подлежат.
                        При получении брака свяжитесь с нами для решения вопроса.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Icon name="Shield" size={48} className="mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Лицензированная аптека</h3>
            <p className="text-lg opacity-90 mb-8">
              Все препараты сертифицированы. Работаем с официальными поставщиками.
              Лицензия № ЛО-77-02-011534 от 15.03.2023
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg">
                <Icon name="Phone" size={18} className="mr-2" />
                8 800 555-35-35
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Icon name="Mail" size={18} className="mr-2" />
                info@zdravapteka.ru
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Plus" className="text-white" size={16} />
              </div>
              <span className="font-semibold">ЗдравАптека</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              © 2024 ЗдравАптека. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
