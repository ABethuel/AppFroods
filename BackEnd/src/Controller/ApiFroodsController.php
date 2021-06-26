<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiFroodsController extends AbstractController
{
    /**
     * @Route("/api/froods", name="api_froods")
     */
    public function index(): Response
    {
        return $this->render('api_froods/index.html.twig', [
            'controller_name' => 'ApiFroodsController',
        ]);
    }
}
