<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');

        //return $this->render('@HomeBundle/Default/index.html.twig');
    }

    /**
     * @Route("/api/companies", name="companies")
     * @return Response
     */

    public function getCompanies()
    {
        $companies = [
            [
                'id' => 1,
                'name' => 'Olususi Oluyemi',
                'phoneNum' => ''
            ],
            [
                'id' => 2,
                'name' => 'Camila Terry',
                'phoneNum' => ''
            ],
            [
                'id' => 3,
                'name' => 'Joel Williamson',
                'phoneNum' => ''

            ],
            [
                'id' => 4,
                'name' => 'Deann Payne',
                'phoneNum' => ''

            ],
            [
                'id' => 5,
                'name' => 'Donald Perkins',
                'phoneNum' => 'Madrid'
            ]
        ];


        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($companies));

        return $response;
    }

    /**
     * @Route("/api/add-customer", name="addCustomer")
     * @return Response
     */

    public function addCustomer(EntityManagerInterface $entityManager)
    {
        $customer = new Customer();
        $customer->setFirstName();
        $customer->setLastName();
        $customer->setAddress();

        $entityManager->persist($customer);
        $entityManager->flush();

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($customers));

        return $response;
    }

    /**
     * @Route("/api/customers/{id}", name="customers")
     * @return Response
     */

    public function getCustomers($id)
    {
        // dump display the variable or object
        dump($id);
        $customers = [

        ];



        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($customers));

        return $response;
    }
}