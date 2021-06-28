<?php

namespace App\DataFixtures;

use App\Entity\OldProposition;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class OldPropositionFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $oldproposition1 = new OldProposition();
        $oldproposition1->setName("Lasagnes bolognaises")
                        ->setDate(new \DateTime())
                        ->setPrice(3)
                        ->setDescription("Lasagnes bolognaises concoctées avec amour")
                        ->setCategory("Italien")
                        ->setImage("https://www.galbani.fr/wp-content/uploads/2017/07/shutterstock_142426168-800x600.jpg");
        $manager->persist($oldproposition1);

        $oldproposition2 = new OldProposition();
        $oldproposition2->setName("Salade niçoise")
            ->setDate(new \DateTime())
            ->setPrice(5)
            ->setDescription("Salade niçoise concocté avec amour")
            ->setCategory("Salade")
            ->setImage("https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/BE9E0A84-F8F5-46FD-AC2D-71814A2783A9/Derivates/cfb89a34-283c-442a-a7ba-e3674cf86b38.jpg");
        $manager->persist($oldproposition2);

        $oldproposition3 = new OldProposition();
        $oldproposition3->setName("Sushis")
            ->setDate(new \DateTime())
            ->setPrice(5)
            ->setDescription("Sushis concoctés avec amour")
            ->setCategory("Asiatique")
            ->setImage("https://www.nemsandsushi.fr/img/f1.jpg");
        $manager->persist($oldproposition3);

        $manager->flush();
    }
}
